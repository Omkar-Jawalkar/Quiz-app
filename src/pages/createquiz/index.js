import React, { useEffect, useState } from "react";
import { doc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "@/services/firebase";
import {
  Badge,
  Box,
  Button,
  Flex,
  Text,
  Heading,
  useEditable,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";
import NameModel from "@/components/model/NameModel";
import { useContext } from "react";
const Index = () => {
  const router = useRouter();
  const { data, user, quiz, setData } = useContext(MyContext);
  // for testing data
  // setData([
  //   {
  //     title: "Heading two",
  //     description: " asdasdasd",
  //     questions: [],
  //   },
  //   {
  //     title: "Heading two",
  //     description: "asdasdasdasd",
  //     questions: [],
  //   },
  // ]);
  // console.log(data);

  const handleDelete = async (index) => {
    try {
      const filteredArray = data.filter((item, i) => i !== index);
      // console.log(filteredArray);

      const quizRef = doc(db, "Users", user);
      await updateDoc(quizRef, {
        data: filteredArray,
      });
      setData(filteredArray);
      toast({
        title: "Quiz Deleted",
        description: "Quiz has been deleted successfully",
        duration: 1000,
        status: "success",
      });
    } catch (err) {
      toast({
        title: "Error Please try again",
        duration: 1000,
        status: "error",
      });
    }
  };

  const toast = useToast();
  return (
    <>
      <Flex
        direction={{ base: "column", lg: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"#FEEE5B"}
          p={10}
          border={"1px solid #FEEE5B"}
          borderRadius={"10px"}
          my={5}
          gap={7}
          maxW={"5xl"}
          cursor={"pointer"}
          _hover={{
            backgroundColor: "#FEEE5B",
            color: "#101820",
            transitionDuration: "0.3s",
          }}
          onClick={(e) => {
            router.push("/createquiz/quiz");
          }}
        >
          <IoIosAddCircleOutline fontSize={"60px"} />
          <Text fontSize={"2xl"} as={"h5"}>
            Add Quiz
          </Text>
        </Flex>

        {data.length === 0 ? (
          <Flex minH={"30px"} justifyContent={"center"} alignItems={"center"}>
            <Heading textAlign={"center"} fontSize={"xl"} as={"h4"}>
              No Quizes found, Please create one 🙋‍♂️
            </Heading>
          </Flex>
        ) : (
          <Flex
            maxW={"100%"}
            justifySelf={"center"}
            alignItems={"stretch"}
            direction={{ base: "column", lg: "column" }}
          >
            {data.map((quiz, index) => (
              <Flex
                // bgColor={"#FEEE5B"}
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
                <Heading textAlign={"center"} fontSize={"2xl"} as="h3">
                  {quiz.title}
                </Heading>
                <Flex gap={3}>
                  <Badge fontSize={"sm"} colorScheme="purple">
                    {" "}
                    {quiz.timer} Minutes{" "}
                  </Badge>
                  <Badge fontSize={"sm"} colorScheme="yellow">
                    {" "}
                    {quiz.questions.length} Questions{" "}
                  </Badge>
                </Flex>

                <Text textAlign={"center"} fontSize={"xl"} as={"p"}>
                  {quiz.description}
                </Text>
                <Flex gap={2} justifyContent={"flex-end"} alignItems={"center"}>
                  <Button
                    onClick={(e) => {
                      router.push(`/createquiz/editquiz/${index + 1}`);
                    }}
                    color={"white"}
                    backgroundColor={"blue.400"}
                  >
                    {" "}
                    Edit Quiz{" "}
                  </Button>
                  <Button
                    color={"white"}
                    onClick={(e) => {
                      // handle Delete
                      handleDelete(index);
                    }}
                    backgroundColor={"red.400"}
                  >
                    {" "}
                    Delete{" "}
                  </Button>
                </Flex>
              </Flex>
            ))}
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Index;
