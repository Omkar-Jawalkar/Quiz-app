import React from "react";
import Image from "next/image";
import { Flex, Text, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <Flex
      direction={"row"}
      justifyContent={"space-between"}
      boxShadow={"md"}
      p={6}
      bgGradient={"linear(to-r, green.200 ,green.200)"}
    >
      <Heading
        cursor={"pointer"}
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
        as={"h2"}
      >
        Quiz App
      </Heading>
      <Flex justifyContent={"center"} alignItems={"center"} gap={6}>
        <Text
          cursor={"pointer"}
          display={{ base: "none", md: "inline" }}
          as={"h4"}
        >
          Hello, Omkar
        </Text>
        <Image
          style={{
            borderRadius: "50%",
            cursor: "pointer",
          }}
          src={"/me.png"}
          width={50}
          height={50}
          alt="profile"
        ></Image>
      </Flex>
    </Flex>
  );
};

export default Navbar;
