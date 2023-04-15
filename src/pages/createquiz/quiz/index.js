import React, { useState } from "react";

import QuizHead from "@/components/createQuiz/QuizHead";
import QuizBody from "@/components/createQuiz/QuizBody";
import QuizFoot from "@/components/createQuiz/QuizFoot";
import { Container } from "@chakra-ui/react";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
const Index = () => {
  const { data } = useContext(MyContext);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [questions, setQuestions] = useState([
    {
      questionTitle: "",
      points: 1,
      isRequired: false,
      answer: "",
      inputs: [""],
    },
  ]);
  const [timerState, setTimerState] = useState(5);

  return (
    <Container maxW={"container.md"}>
      <QuizHead
        timerState={timerState}
        setTimerState={setTimerState}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <QuizBody questions={questions} setQuestions={setQuestions} />
      <QuizFoot
        timerState={timerState}
        questions={questions}
        title={title}
        description={description}
      />
    </Container>
  );
};

export default Index;
