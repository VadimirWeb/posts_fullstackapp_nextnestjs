"use client"

import { useEffect, useState } from "react";
import Header from "../ui/HeaderUI";
import { getUsers } from "@/lib/api/users";


export default function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect( function(){
    getUsers().then(setUsers).catch(console.error)
  },[])

  return (
    <>
      <Header />
      <ul className="container mx-auto">
        {users?.map((user, index) => 
        <li key={index+1} className="my-2 flex bg-blue-200 px-5 py-2">
            <h2 className="font-bold mr-2">{user["email"]}</h2>
            <h3 className="text-sm">{user["password"]}</h3>
        </li>)}
      </ul>
    </>
  );
}
