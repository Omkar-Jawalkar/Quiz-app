import React, { useContext } from "react";
import { MyContext } from "@/context/myContext";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Index = () => {
  // importing Context

  const { finalResult } = useContext(MyContext);

  // importing Router

  const router = useRouter();
  return (
    <Flex m={10} p={5} alignItems={"center"} justifyContent={"center"}>
      <Heading fontSize={"xl"}>Results</Heading>

      <Text as={"p"}>You Scored {finalResult.pointsScored} out of </Text>

      <Button
        onClick={() => router.push("/attemptquiz")}
        backgroundColor={"blue.500"}
      >
        Go Back{" "}
      </Button>
    </Flex>
  );
};

export default Index;
