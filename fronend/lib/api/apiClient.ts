export async function apiFetch(endpoint: string, options?: RequestInit){
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    console.log(endpoint)
     const headers = {
        ...(endpoint !== "/upload/image" ? { "Content-Type": "application/json" } : {}),
        ...(token ? {Authorization : `Bearer ${token}`} : {}),
        ...options?.headers,
    }

    const res = await fetch(`http://localhost:3001${endpoint}`, {
        headers,
        ...options,
    })

    if (!res.ok) throw new Error(`Ошибка: ${res.statusText}`)
    return res.json();
}