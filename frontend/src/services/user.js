import { getToken } from "./auth";

export async function getUserProfile() {
    const token = getToken();

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    return data;
}

export async function updateUserProfileService(firstName, lastName) {
    const token = getToken();

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
    });

    if (!response.ok) {
        throw new Error("Failed to update user profile");
    }

    const data = await response.json();
    return data;
}
