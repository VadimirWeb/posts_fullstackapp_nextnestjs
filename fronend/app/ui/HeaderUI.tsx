"use client"

import { ButtonComp } from "../components/ButtonComp";
import { LinksComp } from "../components/LinkComp";
import { useLayoutEffect, useState } from "react";


export default function Header() {
  const [authSession, setAuthSession] = useState(false)

    useLayoutEffect(()=>{
      localStorage.getItem("token") ? setAuthSession(true) : setAuthSession(false)
  },[])


  return (
      <header className="container mx-auto flex bg-blue-100 justify-between py-3 px-3">

      <div className="flex gap-5">
          <LinksComp title="Posts" link="/posts"/>
          <LinksComp title="Users" link="/users"/>
          {authSession ? 
          <div className="gap-5"> 
            <LinksComp title="Create post " link="/createPost"/> 
            <LinksComp title="Profile" link="/profile"/>
          </div>
          
          : ""}
        </div>
        {authSession ?
          <div>
            <ButtonComp title="Sign out" />
          </div> 
          : 
          <div className="flex gap-5">
            <ButtonComp title="Login" />
            <ButtonComp title="Register" />
          </div>
          }
      </header>
  );
}
