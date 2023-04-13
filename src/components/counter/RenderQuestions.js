import React, { useState } from "react";
import {
  Divider,
  Flex,
  Button,
  Heading,
  Text,
  Badge,
  RadioGroup,
  Radio,
  Highlight,
} from "@chakra-ui/react";
const RenderQuestions = () => {
  // Radio Button State

  const [radioValue, setRadioValue] = useState("");

  return (
    <Flex
      mt={7}
      boxShadow={"md"}
      w={"2xl"}
      direction={"column"}
      rounded={"xl"}
      border={"2px"}
      p={5}
    >
      {/* Question and Point */}

      <Flex
        gap={8}
        fontSize={{ base: "sm", lg: "md" }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text flex={6} fontSize={"sm"} as={"p"}>
          What is my name? and whais is muasd asd asd asd asd asd asd asd asd
          asd
        </Text>
        <Text flex={1} whiteSpace={"nowrap"} fontSize="sm" color="grey">
          Points - 3
        </Text>
      </Flex>

      <Divider my={4} />
      {/* Rendering Answers */}

      <RadioGroup onChange={setRadioValue} value={radioValue}>
        <Flex direction={"column"} gap={4} my={5}>
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Flex>
      </RadioGroup>
      <Divider my={5} />
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Button color={"white"} backgroundColor={"blue.400"}>
          Previous
        </Button>
        <Button color={"white"} backgroundColor={"blue.400"}>
          Next{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default RenderQuestions;
