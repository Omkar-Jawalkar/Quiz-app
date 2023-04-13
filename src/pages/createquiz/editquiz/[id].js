import React, { useEffect, useState } from "react";
import QuizBody from "@/components/createQuiz/QuizBody";
import QuizFoot from "@/components/createQuiz/QuizFoot";
import QuizHead from "@/components/createQuiz/QuizHead";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import Error from "next/error";
const id = () => {
  // Getting the ID
  const router = useRouter();
  const { id } = router.query;

  // this is data
  const { data } = useContext(MyContext);

  console.log("id", id);
  if ((id < 1 && id > data.length) || data.length === 0) {
    return <Error statusCode={404}></Error>;
  }

  const mydata = data[id - 1];
  if (mydata === undefined) {
    return <Error statusCode={404}></Error>;
  }

  const [title, setTitle] = useState(mydata.title);
  const [description, setDescription] = useState(mydata.description);

  // const dataArray = Object.keys(mydata.questions)
  //   .filter((key) => !isNaN(parseInt(key)))
  //   .map((key) => data[key]);

  const [questions, setQuestions] = useState(mydata.questions);

  useEffect(() => {
    console.log("questions", questions);
  }, [questions]);

  return (
    <Container maxW={"container.md"}>
      <QuizHead
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
        update={true}
        questions={questions}
        title={title}
        description={description}
        id={id}
      />
    </Container>
  );
};

export default id;
