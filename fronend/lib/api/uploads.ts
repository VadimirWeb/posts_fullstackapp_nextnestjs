import { apiFetch } from "./apiClient";

export async function uploadAvatar(formData: FormData) {
    return apiFetch('/upload/image', {
        method: "POST",
        body: formData,
      })
}