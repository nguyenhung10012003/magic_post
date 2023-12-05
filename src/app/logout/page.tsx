'use client'

import {useAuth} from "@/hook/AuthContext";
import {redirect} from "next/navigation";
import {useEffect} from "react";

export default function Logout() {
  const {logout} = useAuth();
  useEffect(() => {
    logout();
    redirect("/");
  }, []);

  return (<></>);
}