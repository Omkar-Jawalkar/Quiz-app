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
      h={{ base: "auto", lg: "100vh" }}
      justifyContent={"center"}
      alignItems={"center"}
      my={{ base: 24, lg: 0 }}
      mx={{ base: 9, lg: 24 }}
    >
      {/* This is for create Quiz */}
      <Flex
        // backgroundColor={"teal.50"}
        bgColor={"#FEEE5B"}
        color={"#101820"}
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
          Engage your audience with dynamic quizzes! Create timed quizzes with
          multiple question types and customizable designs on our user-friendly
          website. Perfect for education, team-building, and fun. Try it now!
        </Text>
        <Divider />
        <Button
          color={"white"}
          backgroundColor={"#101820"}
          onClick={(e) => {
            handlePush(e, "/createquiz");
          }}
          // backgroundColor={"green.400"}
        >
          Create Quiz
        </Button>
      </Flex>
      {/* This is for take Quiz */}
      <Flex
        backgroundColor={"#FEEE5B"}
        m={3}
        direction={"column"}
        gap={6}
        maxW={"lg"}
        boxShadow={"md"}
        rounded={"xl"}
        p={5}
      >
        <Heading as={"h2"}>Attempt Quiz</Heading>
        <Text>
          Elevate your quiz experience! Create dynamic quizzes with timers,
          varied question types, and customizable designs on our user-friendly
          website. Perfect for testing knowledge, challenging participants, and
          promoting engagement. Try it now.
        </Text>
        <Divider />
        <Button
          onClick={(e) => {
            handlePush(e, "/attemptquiz");
          }}
          color={"white"}
          backgroundColor={"#101820"}
        >
          Attempt Quiz
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
