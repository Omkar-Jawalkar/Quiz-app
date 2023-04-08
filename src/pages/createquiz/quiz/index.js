import React, { useState } from "react";

import QuizHead from "@/components/createQuiz/QuizHead";
import QuizBody from "@/components/createQuiz/QuizBody";
import QuizFoot from "@/components/createQuiz/QuizFoot";
import { Container, Divider } from "@chakra-ui/react";
const index = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [questions, setQuestions] = useState([]);
  console.log(title);
  return (
    <Container maxW={"container.md"}>
      <QuizHead
        title={title}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <QuizBody questions={questions} setQuestions={setQuestions} />
      <QuizFoot questions={questions} title={title} description={description} />
    </Container>
  );
};

export default index;
