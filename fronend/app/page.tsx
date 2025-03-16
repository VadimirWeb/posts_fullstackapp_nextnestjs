"use client"

import Image from "next/image";
import { ButtonComp } from "./components/ButtonComp";
import { LinksComp } from "./components/LinkComp";
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
