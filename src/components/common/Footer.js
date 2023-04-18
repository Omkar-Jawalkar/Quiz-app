import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

<Link as={NextLink} href="/home">
  Home
</Link>;

const Footer = () => {
  return (
    <Flex
      marginTop={"auto"}
      boxShadow={"md"}
      p={6}
      bgColor={"#FEEA2E"}
      color={"#101820"}
      // bgGradient={"linear(to-t, #0dc6b4,#21c68a)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading fontWeight={"bold"} fontSize={"xl"} as={"h4"}>
        Made with ❤️ by{" "}
        <Link as={NextLink} isExternal href="https://github.com/Omkar-Jawalkar">
          @Omkar
        </Link>
      </Heading>
    </Flex>
  );
};

export default Footer;
