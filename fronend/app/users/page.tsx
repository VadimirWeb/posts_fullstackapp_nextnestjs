"use client"

import { useEffect, useState } from "react";
import Header from "../ui/HeaderUI";


export default function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect( function(){
    fetch("http://localhost:3001/users", {
      method: "GET",
    }).then((res) => {
      if (!res.ok) throw new Error("Ошибка загрузки данных");
      return res.json();
    })
    .then((data) => setUsers(data))
  },[])

  return (
    <>
      <Header />
      <ul className="container mx-auto">
        {users?.map((user) => 
        <li className="my-2 flex bg-blue-200 px-5 py-2">
            <h2 className="font-bold mr-2">{user["email"]}</h2>
            <h3 className="text-sm">{user["password"]}</h3>
        </li>)}
      </ul>
    </>
  );
}
