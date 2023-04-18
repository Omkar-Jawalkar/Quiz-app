import React, { useContext, useEffect } from "react";
import { MyContext } from "@/context/myContext";
import { Flex, Heading, Icon, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GrDocumentText } from "react-icons/gr";
import { GiPodiumWinner } from "react-icons/gi";
import { AiOutlineCrown } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
const Index = () => {
  // importing Context

  const { finalResult } = useContext(MyContext);

  useEffect(() => {
    // console.log("finalResult", finalResult);
  }, [finalResult]);

  // importing Router

  const router = useRouter();
  return (
    <Flex
      m={10}
      p={5}
      alignItems={"center"}
      direction={"column"}
      justifyContent={"center"}
      gap={10}
    >
      <Heading color={"white"} as={"h2"} fontSize={"4xl"}>
        Results
      </Heading>

      <Flex
        backgroundColor={"gray.100"}
        w={"100%"}
        h={"sm"}
        p={8}
        m={12}
        boxShadow={"md"}
        rounded={"2xl"}
        gap={5}
        alignItems={{ lg: "center" }}
        justifyContent={{ base: "space-evenly", md: "space-around" }}
        direction={{ base: "column", lg: "row" }}
      >
        <Flex justifyContent={"center"} gap={4} alignItems={"center"}>
          <Icon as={GrDocumentText} fontSize={{ base: "3xl", lg: "5xl" }} />
          <Text as={"h4"} fontSize={{ base: "xl", lg: "2xl" }}>
            {finalResult.totalQuestionsCount} Questions
          </Text>
        </Flex>
        <Flex justifyContent={"center"} gap={4} alignItems={"center"}>
          <Icon as={GiPodiumWinner} fontSize={{ base: "4xl", lg: "5xl" }} />
          <Text as={"h4"} fontSize={{ base: "md", lg: "2xl" }}>
            {finalResult.pointsScored} Points Scored
            <Text as={"h4"} fontSize={{ base: "md", lg: "2xl" }}>
              out of {finalResult.totalPoints} Points
            </Text>
          </Text>
        </Flex>
        <Flex
          pr={{ base: 4 }}
          justifyContent={"center"}
          gap={4}
          alignItems={"center"}
        >
          {finalResult.pointsScored > parseInt(finalResult.totalPoints / 2) ? (
            <>
              {/* For Passed */}
              <Icon
                color={"green.300"}
                as={AiOutlineCrown}
                fontSize={{ base: "4xl", lg: "5xl" }}
              />
              <Text as={"h4"} fontSize={{ base: "xl", lg: "2xl" }}>
                Passed 🏆
              </Text>
            </>
          ) : (
            <>
              {/* For Failed */}

              <Icon
                color={"red.500"}
                as={RxCrossCircled}
                fontSize={{ base: "4xl", lg: "5xl" }}
              />
              <Text as={"h4"} fontSize={{ base: "xl", lg: "2xl" }}>
                Failed 😵
              </Text>
            </>
          )}
        </Flex>
      </Flex>

      <Button
        backgroundColor={"blue.500"}
        color={"white"}
        onClick={() => router.push("/")}
      >
        Go to Home
      </Button>
    </Flex>
  );
};

export default Index;
