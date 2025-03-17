"use client";

import { useEffect, useState } from "react";
import Header from "../ui/HeaderUI";
import Image from "next/image";
import { uploadAvatar } from "@/lib/api/uploads";
import { authProfile } from "@/lib/api/auth";
import { getUserByEmail, updateAvatar } from "@/lib/api/users";

export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    imgurl: "",
    email: "",
    description: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
      authProfile().then(authUser => getUserByEmail(authUser.email).then(setUser).catch(console.error)).catch(console.error)
      
  }, []);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    uploadAvatar(formData).then(data => {
      setImageUrl(data.url)
      updateAvatar(data.url, user["name"]).catch(console.error)
    }).catch(console.error)

  }


  if (!user) return <p>Loading...</p>;

  return (
    <>
      <Header/>
      <div className="container mx-auto mt-5 text-center bg-blue-100/50 w-md py-10">
          <div className="flex flex-col items-center">
          <Image
                src={imageUrl || user["imgurl"]}
                width={200}
                height={200}
                alt="Uploaded"
                unoptimized
                className="rounded-full"
              />
          <form onSubmit={handleUpload} className="mt-2">
                  <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  <button type="submit">Загрузить</button>
                </form>
          </div>
          <p className="text-2xl mt-4">Добро пожаловать, <span className="font-bold text-2xl">{user["name"]}</span>!</p>  
          <p>Твоя почта: <span className="font-bold">{user["email"]}</span></p>
          <p>Твое описание: <span className="font-extralight">{user["description"]}</span></p>
      </div>
      <ul>
      </ul>
      
    </>
  )
}