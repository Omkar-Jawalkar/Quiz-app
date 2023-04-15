import React, { useEffect, useState } from "react";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import {
  Divider,
  Flex,
  Button,
  Heading,
  Text,
  Badge,
  RadioGroup,
  Radio,
  Highlight,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
const RenderQuestions = ({
  renderData,
  questionsLength,
  currentQuestion,
  setCurrentQuestion,
}) => {
  // Radio Button State

  const [radioValue, setRadioValue] = useState("");

  const [questionsToDisplay, setQuestionsToDisplay] = useState(
    renderData.questions[currentQuestion]
  );

  // Timer State


  // Correct Answer points State

  // const [correctAnswerPointsTotal, setCorrectAnswerPointsTotal] = useState(0);

  // Importing Router

  const router = useRouter();

  // Importing Context

  const { setFinalResult, finalResult } = useContext(MyContext);

  const [hashMap, setHashMap] = useState(
    Array(renderData.questions.length).fill(0)
  );

  const handleHashmap = () => {};

  useEffect(() => {
    setQuestionsToDisplay(renderData.questions[currentQuestion]);
    // console.log(questionsToDisplay);
  }, [currentQuestion]);

  useEffect(() => {
    let sum = 0;
    let totalQuestionsCount = renderData.questions.length;
    let totalPoints = 0;
    let correctAnswerCount = 0;
    for (let i = 0; i < hashMap.length; i++) {
      if (hashMap[i] !== 0) {
        sum += hashMap[i];
        correctAnswerCount += 1;
      }
    }
    for (let i = 0; i < renderData.questions.length; i++) {
      totalPoints += parseInt(renderData.questions[i].points);
    }

    // console.log(
    //   "sum",
    //   sum,
    //   "totalQuestionCount",
    //   totalQuestionCount,
    //   "totalPoints",
    //   totalPoints,
    //   "correctAnswerCount",
    //   correctAnswerCount,
    //   "hashMap",
    //   hashMap
    // );
    setFinalResult({
      pointsScored: sum,
      totalQuestionsCount: totalQuestionsCount,
      totalPoints: totalPoints,
      correctAnswerCount: correctAnswerCount,
    });
  }, [hashMap]);

  useEffect(() => {
    // console.log("finalResult", finalResult);
  }, [finalResult]);
  // handle Submit and next button

  const handleSubmitNext = (e) => {
    e.preventDefault();
    if (currentQuestion === questionsLength - 1) {
      if (radioValue === questionsToDisplay.answer) {
        const hashMapCopy = [...hashMap];
        hashMapCopy[currentQuestion] = parseInt(questionsToDisplay.points);
        setHashMap(hashMapCopy);
      }
      setTimeout(() => {
        router.push("/result");
      }, 500);
      return;
    }
    if (currentQuestion < questionsLength) {
      // Setting value if correct answer
      if (radioValue === questionsToDisplay.answer) {
        const hashMapCopy = [...hashMap];
        hashMapCopy[currentQuestion] = parseInt(questionsToDisplay.points);
        setHashMap(hashMapCopy);
      } else {
        const hashMapCopy = [...hashMap];
        hashMapCopy[currentQuestion] = 0;
        setHashMap(hashMapCopy);
      }

      setCurrentQuestion(currentQuestion + 1);
      setRadioValue("");
    }
  };

  return (
    <Flex
      maxH={"3xl"}
      mt={7}
      boxShadow={"md"}
      w={"2xl"}
      direction={"column"}
      rounded={"xl"}
      border={"2px"}
      p={5}
    >
      {/* Question and Point */}

      <Flex
        gap={8}
        fontSize={{ base: "sm", lg: "md" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text flex={6} fontSize={{ base: "sm", lg: "lg" }} as={"p"}>
          {questionsToDisplay.questionTitle}
        </Text>
        <Text flex={1} whiteSpace={"nowrap"} fontSize="sm" color="grey">
          <Badge color={"purple"}> {questionsToDisplay.points} Points </Badge>
        </Text>
      </Flex>

      <Divider my={4} />
      {/* Rendering Answers */}

      <RadioGroup onChange={setRadioValue} value={radioValue}>
        <Flex direction={"column"} gap={4} my={5}>
          {questionsToDisplay.inputs.map((answer, index) => {
            return (
              <Radio value={answer} key={index}>
                {answer}
              </Radio>
            );
          })}
        </Flex>
      </RadioGroup>
      <Divider my={5} />
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Button
          isDisabled={currentQuestion === 0 ? true : false}
          onClick={(e) => {
            e.preventDefault();
            if (currentQuestion > 0) {
              setCurrentQuestion(currentQuestion - 1);
            }
          }}
          color={"white"}
          backgroundColor={"blue.400"}
        >
          Previous
        </Button>
        <Button
          onClick={(e) => {
            handleSubmitNext(e);
          }}
          isDisabled={radioValue === "" ? true : false}
          color={"white"}
          backgroundColor={
            currentQuestion === questionsLength - 1 ? "green.400" : "blue.400"
          }
        >
          {currentQuestion === questionsLength - 1 ? "Submit" : "Next"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default RenderQuestions;
