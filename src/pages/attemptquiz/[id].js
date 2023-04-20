import React, { useState } from "react";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import Eachquiz from "@/components/eachQuiz/Eachquiz";
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
    <Eachquiz
      setCurrentQuestion={setCurrentQuestion}
      currentQuestion={currentQuestion}
      renderData={renderData}
    ></Eachquiz>
  );
};

export default ShowQuiz;
