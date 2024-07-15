import { getUserProfile, updateUserProfileService } from "./user";
import * as All from "../type/authTypes";

export function logout() {
    return (dispatch) => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
    };
}

export function getToken() {
    return localStorage.getItem("token");
}

export const login = (email, password) => async (dispatch) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        dispatch({
            type: All.LOGIN_FAIL,
        });
        throw new Error("Login failed");
    }

    const data = await response.json();

    if (data.body && data.body.token) {
        localStorage.setItem("token", data.body.token);
        dispatch({
            type: All.LOGIN_SUCCESS,
        });

        dispatch(loadUser());
    } else {
        dispatch({
            type: All.LOGIN_FAIL,
        });
    }
};

export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        try {
            const profileData = await getUserProfile();
            dispatch({
                type: All.USER_LOADED,
                payload: profileData.body,
            });
        } catch (err) {
            dispatch({
                type: All.AUTH_ERROR,
            });
        }
    }
};

export const updateUserProfile = (firstName, lastName) => async (dispatch) => {
    try {
        const updatedUser = await updateUserProfileService(firstName, lastName);
        dispatch({
            type: All.UPDATE_USER_PROFILE,
            payload: updatedUser.body,
        });
    } catch (error) {
        console.error("Failed to update user profile:", error);
    }
};
