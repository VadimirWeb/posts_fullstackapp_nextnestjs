import { redirect } from "next/navigation";
import { useState } from "react";

interface ButtonProps {
    title: string;
  }
  
export const ButtonComp: React.FC<ButtonProps> = ({ title }) => {
  
    function onClickButton(){
      if(title == "Login"){
        redirect('/login')
      }else if (title == "Register"){
        redirect('/registration')
      }else if (title == "Sign out"){
        localStorage.removeItem('token')
        redirect('login')
      }
    }

    return (
      <button onClick={onClickButton} className="px-2 bg-blue-500 text-white border-1 border-transparent hover:bg-blue-700">{title}</button>
    );
  };