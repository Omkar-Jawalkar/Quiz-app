import React, { useEffect, useState } from "react";
import { Input, Flex, Heading, Text, Button } from "@chakra-ui/react";
const QuizHead = ({ setTitle, setDescription }) => {
  return (
    <Flex
      gap={7}
      direction={"column"}
      p={4}
      mt={8}
      boxShadow={"md"}
      rounded={"lg"}
    >
      <Input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        variant="flushed"
        placeholder="Title"
        size="lg"
      />

      <Input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        size={"sm"}
        variant={"flushed"}
        placeholder="Description"
      />
    </Flex>
  );
};

export default QuizHead;
