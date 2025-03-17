"use client"

import { useEffect, useState } from "react"
import Header from "../ui/HeaderUI"
import { getPosts } from "@/lib/api/posts"
import Link from "next/link"

export default function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getPosts().then(setPosts).catch(console.error);
    },[])
    return (
        <>
            <Header />
            <div className="container mx-auto">
                <ul className="flex flex-col gap-2 mt-6 mx-auto text-white w-4xl">
                    {posts.map((post, key) =>
                    <Link  key={post["id"]} href={"/posts/" + post["uid"]}>
                        <li className="flex px-6 py-4 hover:shadow-xl shadow-md bg-blue-500/20">
                            <h3 className="font-extralight mr-4 text-5xl">{key + 1})</h3>
                            <div className="flex flex-col ">
                                <p className="text-2xl font-bold mb-2">{post["title"]}</p>
                                <p className="text-sm mb-2">{post["message"]}</p>
                                <p className="text-xs text-white/60">{"by " + post["name"]}</p>
                            </div>
                        </li>
                    </Link>
                        
                    )}
                </ul>
            </div>
        </>
    )
}