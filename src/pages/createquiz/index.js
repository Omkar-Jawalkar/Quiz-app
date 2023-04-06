import React, { useState } from "react";
import { Box, Button, Flex, Text, Heading } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const [quizes, setQuizes] = useState([1, 1, 1]);
  return (
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

      <Flex direction={{ base: "column", lg: "row" }}>
        {quizes.map((quiz) => (
          <Flex
            m={4}
            boxShadow={"sm"}
            _hover={{ boxShadow: "md" }}
            direction={"column"}
            gap={5}
            backgroundColor={"teal.100"}
            rounded={"xl"}
            p={4}
          >
            <Heading as="h3">Quiz Name</Heading>
            <Button color={"whiteAlpha.900"} backgroundColor={"blue.400"}>
              {" "}
              Edit Quiz{" "}
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default index;
