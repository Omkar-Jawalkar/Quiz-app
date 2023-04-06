import React from "react";

import QuizHead from "@/components/createQuiz/QuizHead";
import QuizBody from "@/components/createQuiz/QuizBody";
import QuizFoot from "@/components/createQuiz/QuizFoot";
import { Container } from "@chakra-ui/react";
const index = () => {
  return (
    <Container>
      <QuizHead />
      <QuizBody />
      <QuizFoot />
    </Container>
  );
};

export default index;
