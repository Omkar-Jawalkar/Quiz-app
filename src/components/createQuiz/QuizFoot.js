import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Icon, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import { useToast } from "@chakra-ui/react";

const QuizFoot = ({ questions, title, description }) => {
  const { quiz, setQuiz } = useContext(MyContext);
  let checkAll = "good";
  const toast = useToast();

  const router = useRouter();

  const handleSave = () => {
    if (title === null) {
      toast({
        title: "Please add a title",
        status: "warning",
        isClosable: true,
        duration: 3000,
      });
      return;
    }
    if (description === null) {
      toast({
        title: "Please add a description",
        status: "warning",
        isClosable: true,
        duration: 3000,
      });
      return;
    }
    questions.map((question, index) => {
      if (question.questionTitle === "") {
        toast({
          title: `Oops, you forgot to add a question title to question ${
            index + 1
          }`,
          status: "warning",
          isClosable: true,
          duration: 3000,
        });

        checkAll = "bad";
        return;
      }
      if (question.inputs.length <= 2 || question.inputs[0] === "option") {
        toast({
          title: `You gotta add at least two options at question ${index + 1}`,
          status: "info",
          isClosable: true,
          duration: 3000,
        });
        checkAll = "bad";
        return;
      }
      if (question.answer === "") {
        toast({
          title: `Oops, you forgot to add an answer to question ${index + 1}`,
          status: "error",
          isClosable: true,
          duration: 3000,
        });
        checkAll = "bad";
        return;
      }
    });

    if (checkAll === "bad") {
      return;
    }

    setQuiz({
      ...quiz,
      title: title,
      description: description,
      questions: questions,
    });
    toast({
      title: `Quiz added Successfully!!🎉`,
      status: "success",
      isClosable: true,
      duration: 3000,
    });
    router.push("/createquiz");

    console.log("quiz", quiz);
  };

  return (
    <Flex
      my={12}
      py={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={3}
    >
      <Button
        onClick={(e) => {
          router.push("/createquiz");
        }}
        color={"whiteAlpha.900"}
        backgroundColor={"blue.400"}
      >
        Back
      </Button>
      <Button
        onClick={(e) => {
          handleSave();
        }}
        color={"whiteAlpha.900"}
        backgroundColor={"green.400"}
      >
        Save Quiz
      </Button>
    </Flex>
  );
};

export default QuizFoot;
