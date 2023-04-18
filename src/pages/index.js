import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import { MyContext } from "@/context/myContext";
import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import NameModel from "@/components/model/NameModel";
export default function Home() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    if (localStorage.getItem("user_name")) {
      setUser(localStorage.getItem("user_name"));
    }
  }, []);

  return (
    <>
      {user.length >= 6 ? <HeroSection></HeroSection> : <NameModel></NameModel>}
    </>
  );
}
