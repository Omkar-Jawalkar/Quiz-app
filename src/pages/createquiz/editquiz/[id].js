import React, { useEffect, useState, useContext } from "react";
import QuizBody from "@/components/createQuiz/QuizBody";
import QuizFoot from "@/components/createQuiz/QuizFoot";
import QuizHead from "@/components/createQuiz/QuizHead";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";

import Error from "next/error";
const Index = () => {
  // Getting the ID
  const router = useRouter();
  const { id } = router.query;

  // this is data
  const { data } = useContext(MyContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [timerState, setTimerState] = useState(0);

  useEffect(() => {
    if ((id < 1 && id > data.length) || data.length === 0) {
      return <Error statusCode={404}></Error>;
    }

    const mydata = data[id - 1];
    if (mydata === undefined) {
      return <Error statusCode={404}></Error>;
    }

    setTitle(mydata.title);
    setDescription(mydata.description);
    setQuestions(mydata.questions);
    setTimerState(mydata.timer);
  }, [id, data]);

  // if ((id < 1 && id > data.length) || data.length === 0) {
  //   return <Error statusCode={404}></Error>;
  // }

  // const mydata = data[id - 1];
  // if (mydata === undefined) {
  //   return <Error statusCode={404}></Error>;
  // }

  // setTitle(mydata.title);
  // setDescription(mydata.description);
  // setQuestions(mydata.questions);
  // setTimerState(mydata.timer);

  // useEffect(() => {
  //   console.log("questions", questions);
  // }, [questions]);

  return (
    <Container color={"white"} maxW={"container.md"}>
      <QuizHead
        setTimerState={setTimerState}
        timerState={timerState}
        title={title}
        description={description}
        update={true}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <QuizBody
        update={true}
        questions={questions}
        setQuestions={setQuestions}
      />
      <QuizFoot
        timerState={timerState}
        update={true}
        questions={questions}
        title={title}
        description={description}
        id={id}
      />
    </Container>
  );
};

export default Index;
