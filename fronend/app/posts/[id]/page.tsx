"use client"

import Header from "@/app/ui/HeaderUI";
import { findByUId } from "@/lib/api/posts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function openedPost(){
    const [post, setPost] = useState({
        "id": "",
        "title": "",
        "message": "",
        "name": "",
        "uid": ""
    })
    
    const { id } = useParams();

    useEffect(()=>{
        findByUId(id!.toString()).then(setPost).catch(console.error)
    },[])


    return(
        <>
        <Header />
        <div className="container mx-auto bg-purple-100/50 relative px-4 py-2">
            <h2 className="text-center font-bold text-2xl mb-4">{post["title"]}</h2>
            <span>{post["message"]}</span>

            <p className="absolute top-2 right-4 text-gray-700">{post["name"]}</p>
        </div>
        </>
    )
}