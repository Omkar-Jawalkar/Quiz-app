import React, { useState } from "react";
import { Input, Icon, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Question from "./Question";

const QuizBody = () => {
  const [questions, setQuestions] = useState([1]);
  const addQuestion = () => {
    setQuestions([...questions, 1]);
  };
  return (
    <Flex gap={3} direction={"column"}>
      {questions.map((question, index) => (
        <Question key={index} setQuestions={setQuestions} />
      ))}
      <Flex my={2} gap={3} justifyContent={"flex-end"} alignItems={""}>
        <Text onClick={addQuestion} as="p" fontSize={"xl"}>
          {" "}
          Add
        </Text>
        <Icon
          onClick={addQuestion}
          cursor={"pointer"}
          fontSize={"3xl"}
          as={IoMdAddCircleOutline}
          color={"blue.400"}
        />
      </Flex>
    </Flex>
  );
};

export default QuizBody;
