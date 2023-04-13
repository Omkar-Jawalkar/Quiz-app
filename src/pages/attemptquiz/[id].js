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
const ShowQuiz = () => {
  const router = useRouter();
  const { id } = router.query;

  // Getting context

  const { data } = useContext(MyContext);

  const [renderData, setRenderData] = useState(data[id - 1]);

  if (!renderData) return <div>Loading...</div>;

  return (
    <Flex
      m={10}
      minH={"50vh"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
      direction={"column"}
    >
      <Heading fontSize={"4xl"}> {renderData.title} </Heading>
    </Flex>
  );
};

export default ShowQuiz;
