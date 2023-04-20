import React from "react";
import { useRouter } from "next/router";
import { Button, Heading, Flex } from "@chakra-ui/react";
const Index = () => {
  const router = useRouter();
  return (
    <Flex
      justifyContent={"center"}
      m={5}
      p={5}
      direction={"column"}
      gap={10}
      alignItems={"center"}
      color={"white"}
    >
      <Heading> Nothing Here to See </Heading>
      <Button
        backgroundColor={"blue.400"}
        onClick={() => {
          router.push("/");
        }}
      >
        Go back Home
      </Button>
    </Flex>
  );
};

export default Index;
