"use client"


import { useEffect } from "react";
import { redirect } from "next/navigation";
import Header from "./ui/HeaderUI";

export default function Home() {
  useEffect(()=>{
    redirect('/posts')
  },[])
  return (
    <>
      <Header />
    </>
  );
}
