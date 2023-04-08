import React, { useState } from "react";
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
  Radio,
  RadioGroup,
  Divider,
  Icon,
  NumberInputStepper,
} from "@chakra-ui/react";

import { BiRadioCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Switch } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

const Question = ({ setQuestions }) => {
  const [inputs, setInputs] = useState(["option 1"]);

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
      {/* Radio Button */}
      <Flex gap={2} direction={"column"}>
        {inputs.map((text, index) => (
          <>
            <Flex
              justifyContent={"flex-start"}
              fontSize={"2xl"}
              alignItems={"center"}
              gap={3}
            >
              <BiRadioCircle cursor={"pointer"} />
              <Input
                maxW={"xs"}
                variant={"flushed"}
                placeholder={text}
                key={index}
              />
              <Icon
                color={"grey.50"}
                _hover={{ color: "red.500" }}
                cursor={"pointer"}
                as={RxCross2}
              />
            </Flex>
          </>
        ))}
        <Flex
          my={2}
          justifyContent={"flex-start"}
          fontSize={"2xl"}
          alignItems={"center"}
          gap={3}
        >
          <BiRadioCircle cursor={"pointer"} />

          <Text
            cursor={"pointer"}
            color={"blue.400"}
            fontSize={"md"}
            _hover={{ textDecoration: "underline" }}
            onClick={() => {
              const lastItem = inputs[inputs.length - 1];
              const lastDigit = lastItem[lastItem.length - 1];
              const addEle = `option ${parseInt(lastDigit) + 1}`;
              setInputs([...inputs, addEle]);
            }}
          >
            Add Inputs
          </Text>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex gap={3} alignItems={"center"} justifyContent={"flex-end"}>
        <Icon
          as={MdDelete}
          color={"red.500"}
          fontSize={"2xl"}
          cursor={"pointer"}
        />
        <Divider orientation="vertical" />

        <Text as="p"> Required </Text>
        <Switch id="isRequired" isRequired />
      </Flex>
    </Flex>
  );
};

export default Question;
