"use client";

import { useEffect, useState } from "react";
import Header from "../ui/HeaderUI";

async function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const res = await fetch("http://localhost:3001/auth/profile", {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) return null;

  return await res.json();
}

async function getPostCount(){
  return await fetch('http://localhost:3001/posts', {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(res => res? res.json : "aoao")
}

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const userData = await getAuthToken();
      setUser(userData);
    }

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <Header/>
      <div className="container mx-auto mt-5 text-center bg-blue-100/50 w-md py-10">
          <p>Добро пожаловать, <span className="font-bold text-2xl">{user["name"]}</span>!</p>
          <p>Твоя почта: <span className="font-bold">{user["email"]}</span></p>
      </div>
      
    </>
  )
}