"use client";

import { useState } from "react";
import Header from "../ui/HeaderUI";
import { useRouter } from "next/navigation"; 
import { ButtonComp } from "../components/ButtonComp";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchName, setFetchName] = useState("");
  const router = useRouter();

  async function onLoginSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res1 = await fetch(`http://localhost:3001/users/byEmail?email=${email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!res1.ok) throw new Error("Ошибка загрузки пользователя");
      const data = await res1.json();
      setFetchName(data.name); 

      console.log("Имя пользователя:", data.name);

      const res2 = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name: data.name })
      });

      if (!res2.ok) throw new Error("Ошибка входа");
      const { token } = await res2.json();
      
      localStorage.setItem("token", token);
      console.log("Login successful");

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