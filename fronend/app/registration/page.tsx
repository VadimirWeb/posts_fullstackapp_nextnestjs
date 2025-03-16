"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"
import Header from "../ui/HeaderUI";
import { ButtonComp } from "../components/ButtonComp";

export default function Registration(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter(); 

    async function onRegisterUser(e: React.FormEvent){
        e.preventDefault();

        await fetch("http://localhost:3001/users",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "email": email, "name": name, "password": password })
        })

        const loginNewUser = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "email": email, "name": name, "password": password })
          });

          if (loginNewUser.ok) {
            const { token } = await loginNewUser.json();
            localStorage.setItem("token", token);
            router.push("/profile"); 
          } else {
            console.error("Ошибка входа");
          }


    }

    return (
        <>
            <Header />
            <div className="container mx-auto flex justify-center text-white">
                <form className="flex flex-col items-center gap-2 pt-10 pb-20 bg-blue-100/50 w-2xl px-4 py-2 mt-5" onSubmit={onRegisterUser}>
                    <h2 className="font-bold text-xl">Registration:</h2>
                    <input className="bg-blue-50/80 w-60 h-10 px-2 text-blue-800 focus:border-1 focus:bg-blue-50 outline-0" type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="bg-blue-50/80 w-60 h-10 px-2 text-blue-800 focus:border-1 focus:bg-blue-50 outline-0" type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
                    <input className="bg-blue-50/80 w-60 h-10 px-2 text-blue-800 focus:border-1 focus:bg-blue-50 outline-0" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <ButtonComp title="Login"/>
                </form>
            </div>
        </>
    )
}