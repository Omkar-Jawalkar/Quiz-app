import React from "react";
import { Input, Flex, Heading, Text, Button } from "@chakra-ui/react";
const QuizHead = () => {
  return (
    <Flex
      gap={7}
      direction={"column"}
      p={4}
      mt={8}
      boxShadow={"md"}
      rounded={"lg"}
    >
      <Input variant="flushed" placeholder="Title" size="lg" />
      <Input size={"sm"} variant={"flushed"} placeholder="Description" />
    </Flex>
  );
};

export default QuizHead;
