import React from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Button,
  Heading,
  Text,
  Badge,
  Highlight,
} from "@chakra-ui/react";
import RenderQuestions from "@/components/counter/RenderQuestions";
import ReverseCountdownTimer from "@/components/counter/ReverseCountdownTimer";
const Eachquiz = ({ currentQuestion, setCurrentQuestion, renderData }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Flex
      m={10}
      minH={"10vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
      direction={"column"}
      color={"white"}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        w={"100%"}
        gap={4}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Heading fontSize={"4xl"}> {renderData.title} </Heading>
        <ReverseCountdownTimer router={router} minutes={renderData.timer} />
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} w={"100%"}>
        <RenderQuestions
          renderData={renderData}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          questionsLength={renderData.questions.length}
        />
      </Flex>

      <Flex m={4} justifyContent={"center"} alignItems={"center"}>
        <Button
          onClick={() => {
            router.push("/attemptquiz");
          }}
          color="white"
          backgroundColor={"red.400"}
        >
          End Quiz
        </Button>
      </Flex>
    </Flex>
  );
};

export default Eachquiz;
