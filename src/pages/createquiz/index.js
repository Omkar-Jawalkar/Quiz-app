import React, { useEffect, useState } from "react";
import {
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
const index = () => {
  const router = useRouter();
  const { data, user, quiz, setData } = useContext(MyContext);
  // for texting data
  // setData([
  //   {
  //     title: "Heading two",
  //     description:
  //       " Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con",
  //     questions: [],
  //   },
  //   {
  //     title: "Heading two",
  //     description:
  //       "m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets con",
  //     questions: [],
  //   },
  // ]);
  // console.log(data);
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
          mt={10}
          boxShadow={"sm"}
          _hover={{ boxShadow: "md" }}
          direction={"column"}
          gap={5}
          backgroundColor={"teal.100"}
          rounded={"xl"}
          py={4}
          px={8}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
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
                key={index}
                m={4}
                maxW={"2xl"}
                boxShadow={"sm"}
                _hover={{ boxShadow: "md" }}
                direction={"column"}
                gap={5}
                backgroundColor={"teal.100"}
                rounded={"xl"}
                p={4}
              >
                <Heading fontSize={"2xl"} as="h3">
                  Title : {quiz.title}
                </Heading>
                <Text fontSize={"xl"} as={"p"}>
                  <b>Description</b> : {quiz.description} 🙋‍♂️
                </Text>
                <Flex gap={2} justifyContent={"flex-end"} alignItems={"center"}>
                  <Button color={"whiteAlpha.900"} backgroundColor={"blue.400"}>
                    {" "}
                    Edit Quiz{" "}
                  </Button>
                  <Button
                    color={"whiteAlpha.900"}
                    onClick={(e) => {
                      const updatedData = [...data];
                      updatedData.splice(index, 1);
                      setData(updatedData);
                      toast({
                        title: "Quiz Deleted",
                        description: "Quiz has been deleted successfully",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                      });
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

export default index;
