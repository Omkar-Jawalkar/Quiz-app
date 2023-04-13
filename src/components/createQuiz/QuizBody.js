import React, { useState } from "react";
import { Input, Icon, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Question from "./Question";

const QuizBody = ({ update, questions, setQuestions }) => {
  // To add the new question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionTitle: "",
        points: 1,
        isRequired: false,
        answer: "",
        inputs: [""],
      },
    ]);
  };
  return (
    <Flex gap={3} direction={"column"}>
      {questions.map((question, index) => (
        <Question
          update={update}
          question={question}
          questions={questions}
          key={index}
          index={index}
          setQuestions={setQuestions}
        />
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
