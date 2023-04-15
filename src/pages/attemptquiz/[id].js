import React, { useState } from "react";
import {
  Flex,
  Button,
  Heading,
  Text,
  Badge,
  Highlight,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import RenderQuestions from "@/components/counter/RenderQuestions";
import ReverseCountdownTimer from "@/components/counter/ReverseCountdownTimer";
import index from ".";
const ShowQuiz = () => {
  const router = useRouter();
  const { id } = router.query;

  // Getting context

  const { data } = useContext(MyContext);

  const [renderData, setRenderData] = useState(data[id - 1]);

  // Current Question State

  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (!renderData) return <div>Loading...</div>;

  return (
    <Flex
      m={10}
      minH={"10vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
      direction={"column"}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        w={"100%"}
        gap={4}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", lg: "flex-start" }}
      >
        <Heading fontSize={"4xl"}> {renderData.title} </Heading>
        <ReverseCountdownTimer minutes={renderData.timer} />
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

export default ShowQuiz;
