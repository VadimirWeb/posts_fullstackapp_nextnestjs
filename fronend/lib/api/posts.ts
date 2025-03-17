import { apiFetch } from "./apiClient";

export async function getPosts() {
    return apiFetch('/posts')
}

export async function setPost(message: string, userName: string, title: string){
    return apiFetch('/posts', {
        method: "POST",
        body: JSON.stringify({ message: message, name: userName, title: title})
    })
}

export async function findByUId(uid: string){
    return apiFetch(`/posts/byUid?uid=${uid}`)
}