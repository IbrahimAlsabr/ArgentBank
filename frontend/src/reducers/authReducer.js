import {
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGOUT,
    UPDATE_USER_PROFILE,
} from "../type/authTypes";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: {
        firstName: "Ibrahim",
        lastName: "Alsabr",
    },
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            };
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: {
                    firstName: "",
                    lastName: "",
                },
            };
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
