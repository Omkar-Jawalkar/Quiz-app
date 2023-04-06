import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      marginTop={"auto"}
      boxShadow={"md"}
      p={6}
      bgGradient={"linear(to-r, green.200 ,green.200)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading fontWeight={"bold"} fontSize={"xl"} as={"h4"}>
        Made with ❤️ by Omkar
      </Heading>
    </Flex>
  );
};

export default Footer;
