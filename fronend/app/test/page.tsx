
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const getData = ( async () => {
    const res = await fetch("http://localhost:3001/users", {
        method: "GET",
      })

      const datas = await res.json()

      return datas

})

export default async function Profile(){

    const data = await getData()

  return <p>Добро пожаловать, {data[0]["id"]}!</p>;
}