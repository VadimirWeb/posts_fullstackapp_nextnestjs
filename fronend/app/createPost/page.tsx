"use client"
import { useEffect, useState } from "react";
import Header from "../ui/HeaderUI";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { ButtonComp } from "../components/ButtonComp";
import { authProfile } from "@/lib/api/auth";
import { setPost } from "@/lib/api/posts";


export default function createPost(){
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [user, setUser] = useState({})

    useEffect(()=>{
        authProfile().then(setUser).catch(console.error)
    },[])

    async function onSubmitMessage(e: React.FormEvent){
        e.preventDefault()
        console.log(user)
        if (user.name)
            await setPost(message, user.name, title)

        redirect('/posts')
    }

    return (
        <>
            <Header />
            <div className="container mx-auto flex justify-center">
                <form className="flex flex-col items-center gap-2 bg-blue-100/50 text-white w-2xl px-4 py-2 mt-5" onSubmit={onSubmitMessage}>
                    <h2 className="font-bold text-xl">Craete Post:</h2>
                    <input className="bg-blue-50/80 w-60 h-10 text-blue-800 px-2 focus:border-1 focus:bg-blue-50 outline-0" placeholder="Enter Title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    <input className="bg-blue-50/80 w-60 h-30 text-blue-800 px-2 focus:border-1 focus:bg-blue-50 outline-0" placeholder="Enter message" type="text" value={message} onChange={e => setMessage(e.target.value)} />
                    <ButtonComp title="Craete post"/>
                </form>
            </div>
            
        </>
    )
}