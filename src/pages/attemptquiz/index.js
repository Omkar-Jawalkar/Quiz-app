import React from "react";
import {
  Flex,
  Badge,
  Button,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import MyAlertBox from "@/components/AlertBox/AlertBox";

import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import { useRouter } from "next/router";
const Index = () => {
  //  This is Router

  const router = useRouter();

  // this is alert box
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  //this is id
  let sendingIndex = 0;

  //This is Context

  const { data } = useContext(MyContext);

  return (
    <Flex
      minH={"100vh"}
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      color={"white"}
    >
      {" "}
      <Heading py={10} fontSize={"4xl"}>
        {" "}
        Attempt Quiz{" "}
      </Heading>
      <>
        {data.length === 0 ? (
          <>
            <Flex
              direction={"column"}
              gap={5}
              justifyContent={"center"}
              alignItems={"center"}
              h={"sm"}
            >
              <Text as={"h4"} fontSize={"lg"}>
                No Quizes Found 🥺 Please Create one
              </Text>
              <Button
                backgroundColor={"blue.500"}
                color={"white"}
                onClick={() => router.push("/")}
              >
                {" "}
                Go back and Create Quiz
              </Button>
            </Flex>
          </>
        ) : (
          <Flex direction={"column"} flexWrap={"wrap"}>
            {data.map((quiz, index) => {
              return (
                <Flex
                  border={"1px solid #FEEE5B"}
                  color={"white"}
                  key={index}
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={10}
                  borderRadius={"10px"}
                  m={10}
                  gap={7}
                  maxW={"5xl"}
                >
                  <Heading textAlign={"center"} fontSize={"2xl"}>
                    {" "}
                    {quiz.title} {"  "}
                    <Badge fontSize={"sm"} colorScheme="purple">
                      {" "}
                      {quiz.timer} Minutes{" "}
                    </Badge>
                  </Heading>
                  <Badge fontSize={"sm"} colorScheme="yellow">
                    {" "}
                    {quiz.questions.length} Questions{" "}
                  </Badge>
                  <Text display={{ sm: "flex" }}> {quiz.description} </Text>
                  <Button
                    bg={"green.400"}
                    color={"white"}
                    onClick={() => {
                      router.push(`/attemptquiz/${index + 1}`);
                    }}
                  >
                    {" "}
                    Attempt{" "}
                  </Button>
                </Flex>
              );
            })}
          </Flex>
        )}
      </>
      {/* <MyAlertBox
        timer={20}
        onOpen={onOpen}
        isOpen={isOpen}
        id={sendingIndex}
        onClose={onClose}
      /> */}
    </Flex>
  );
};

export default Index;
