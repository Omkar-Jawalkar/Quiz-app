import HeroSection from "@/components/HeroSection/HeroSection";
import React from "react";
import { MyContext } from "@/context/myContext";
import { useContext, useEffect } from "react";
import NameModel from "@/components/model/NameModel";
export default function Home() {
  const { user, setUser } = useContext(MyContext);
  return (
    <>
      {user.length >= 6 ? <HeroSection></HeroSection> : <NameModel></NameModel>}
    </>
  );
}
