"use client";

import { useState } from "react";
import Header from "../ui/HeaderUI";
import { useRouter } from "next/navigation"; 
import { ButtonComp } from "../components/ButtonComp";
import { getUserByEmail } from "@/lib/api/users";
import { authLogin } from "@/lib/api/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  async function onLoginSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const userByEmail = await getUserByEmail(email)

      const { token } = await authLogin(email, password, userByEmail.name)
      
      localStorage.setItem("token", token);

      router.push("/profile");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header /> 
      <div className="container mx-auto flex justify-center">
        <form className="flex flex-col items-center gap-2 text-white bg-blue-100/50 w-2xl px-4 pt-10 pb-20 mt-5" onSubmit={onLoginSubmit}>
            <h2 className="font-bold text-3xl">Login:</h2>
            <input className="bg-blue-50/80 w-60 h-10 text-blue-800 px-2 focus:border-1 focus:bg-blue-50 outline-0" placeholder="Enter Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input className="bg-blue-50/80 w-60 h-10 text-blue-800 px-2 focus:border-1 focus:bg-blue-50 outline-0" placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <ButtonComp title="Login"/>
        </form>
      </div>
    </>
  );
}