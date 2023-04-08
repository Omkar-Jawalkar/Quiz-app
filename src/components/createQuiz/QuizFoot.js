import React, { useEffect } from "react";
import { Flex, Text, Button, Icon, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
const QuizFoot = ({ title, description }) => {
  const { quiz, setQuiz } = useContext(MyContext);
  const router = useRouter();

  const handleSave = () => {
    if (title === null) {
      alert("Please add a title");
      return;
    }
    if (description === null) {
      alert("Please add a description");
      return;
    }
    setQuiz({ ...quiz, title: title, description: description });
    console.log(quiz);
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
        onClick={handleSave}
        color={"whiteAlpha.900"}
        backgroundColor={"green.400"}
      >
        Save Quiz
      </Button>
    </Flex>
  );
};

export default QuizFoot;
