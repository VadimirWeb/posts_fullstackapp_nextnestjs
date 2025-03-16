"use client"

import { useEffect, useState } from "react"
import Header from "../ui/HeaderUI"

async function getPosts(){
    const posts = await fetch('http://localhost:3001/posts',
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
    )

    return posts.json()
}

export default function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/posts',
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        ).then(res => {
            if (!res.ok) throw new Error("Ошибка загрузки данных");
            return res.json()}
        ).then(data => setPosts(data))
    },[])
    return (
        <>
            <Header />
            <div className="container mx-auto">
                <ul className="flex flex-col gap-2 mt-6 text-white">
                    {posts.map((post, key) => <li key={post["id"]} className="flex px-2 py-4  hover:shadow-xl shadow-md bg-blue-500/20">
                        <h3 className="font-extralight mr-4 text-5xl">{key + 1})</h3>
                        <div className="flex flex-col">
                            <p className="text-2xl">{post["message"]}</p>
                            <p className="text-xs text-white/60">by {post["name"]}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
        </>
    )
}