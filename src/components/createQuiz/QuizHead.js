import React, { useEffect, useState } from "react";
import { Input, Flex, Select, Heading, Text, Button } from "@chakra-ui/react";
const QuizHead = ({
  title,
  description,
  update = false,
  setTitle,
  setDescription,
  setTimerState,
  timerState,
}) => {
  return (
    <Flex
      color={"black"}
      backgroundColor={"#FEEB43"}
      gap={7}
      direction={"column"}
      p={4}
      mt={8}
      boxShadow={"md"}
      rounded={"lg"}
      border={"1px solid #FEE92C"}
    >
      <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
        <Input
          flex={3}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          variant="flushed"
          placeholder="Title"
          _placeholder={{ color: "gray.600" }}
          borderColor={"gray.600"}
          size="lg"
          value={title}
        />

        <Select
          onChange={(e) => {
            setTimerState(e.target.value);
          }}
          value={timerState}
          variant={"flushed"}
          flex={1}
          placeholder="Select Timer"
          borderColor={"gray.600"}
          _placeholder={{ color: "gray.400" }}
        >
          <option value="5">5 Minutes </option>
          <option value="10">10 Minutes </option>
          <option value="15">15 Minutes </option>
          <option value="20">20 Minutes </option>
        </Select>
      </Flex>
      <Flex>
        <Input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          size={"sm"}
          variant={"flushed"}
          placeholder="Description"
          _placeholder={{ color: "gray.600" }}
          borderColor={"gray.600"}
          value={description}
        />
      </Flex>
    </Flex>
  );
};

export default QuizHead;
