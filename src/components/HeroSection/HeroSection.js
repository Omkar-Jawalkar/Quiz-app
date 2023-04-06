import React from "react";
import { Flex, Text, Box, Heading, Divider, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
const HeroSection = () => {
  const router = useRouter();
  const handlePush = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      mt={32}
      mx={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* This is for create Quiz */}
      <Flex
        backgroundColor={"teal.50"}
        m={3}
        direction={"column"}
        gap={6}
        maxW={"lg"}
        boxShadow={"md"}
        rounded={"xl"}
        p={5}
      >
        <Heading as={"h2"}>Create Quiz</Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aut at
          tempore consequatur vitae fugit dolores, quo quaerat rem culpa ea
          mollitia magni accusantium odit odio distinctio exercitationem maiores
          voluptates.
        </Text>
        <Divider />
        <Button
          color={"white"}
          onClick={(e) => {
            handlePush(e, "/createquiz");
          }}
          backgroundColor={"green.400"}
        >
          Create Quiz
        </Button>
      </Flex>
      {/* This is for take Quiz */}
      <Flex
        backgroundColor={"teal.50"}
        m={3}
        onClick={(e) => {
          handlePush(e, "/attemptquiz");
        }}
        direction={"column"}
        gap={6}
        maxW={"lg"}
        boxShadow={"md"}
        rounded={"xl"}
        p={5}
      >
        <Heading as={"h2"}>Attempt Quiz</Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aut at
          tempore consequatur vitae fugit dolores, quo quaerat rem culpa ea
          mollitia magni accusantium odit odio distinctio exercitationem maiores
          voluptates.
        </Text>
        <Divider />
        <Button color={"white"} backgroundColor={"green.400"}>
          Attempt Quiz
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
