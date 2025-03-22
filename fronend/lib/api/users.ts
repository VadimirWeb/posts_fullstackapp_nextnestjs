import { apiFetch } from "./apiClient";

export async function getUsers() {
    return apiFetch('/users')
}

export async function getUserByEmail(email: string) {
    return apiFetch(`/users/byEmail?email=${email}`)
}

export async function registrationUser(email: string, password: string, name: string) {
    return apiFetch('/users', {
        method: "POST",
        body: JSON.stringify({ "email": email, "name": name, "password": password })
    })
}

export async function getPostsByUser(email: string) {
    return apiFetch('/users/getPostsByUser', {
        method: "POST",
        body: JSON.stringify({ "email": email})
    })
}

export async function updateAvatar(urlAvatar:string,  name: string) {
    return apiFetch('/users/updateAvatar', {
        method: "POST",
        body: JSON.stringify({urlAvatar, name })
    })
}