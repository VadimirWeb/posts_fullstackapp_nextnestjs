import { apiFetch } from "./apiClient";

export async function authLogin(email: string, password: string, name: string) {
    return apiFetch('/auth/login', {
        method: "POST",
        body: JSON.stringify({ email, password, name })
    })
}

export async function authProfile() {
    return apiFetch('/auth/profile')
}