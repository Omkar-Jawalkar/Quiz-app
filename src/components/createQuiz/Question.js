import React from "react";
import {
  Input,
  Flex,
  Heading,
  Text,
  Button,
  NumberInput,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
const Question = () => {
  return (
    <Flex
      gap={7}
      direction={"column"}
      p={4}
      mt={8}
      boxShadow={"md"}
      rounded={"lg"}
    >
      {" "}
      <Flex
        p={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {" "}
        {/* this is question */}
        <Input
          maxW={"lg"}
          variant={"flushed"}
          size={"md"}
          placeholder="Question 1"
        />
        {/* This is points field */}
        <Flex gap={2}>
          <Text color={"gray.400"} fontSize={"md"} as="p">
            Points
          </Text>
          <NumberInput size="xs" maxW={16} defaultValue={5} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>{" "}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Question;
