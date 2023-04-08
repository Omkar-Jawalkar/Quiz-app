import React, { useEffect, useState } from "react";
import {
  Input,
  useDisclosure,
  Flex,
  Heading,
  Text,
  Button,
  NumberInput,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  Radio,
  RadioGroup,
  Divider,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  NumberInputStepper,
} from "@chakra-ui/react";

import { BiRadioCircle } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Switch } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

const Question = ({ index, questions, setQuestions }) => {
  // this is for popover
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [inputs, setInputs] = useState(["option"]);
  const [questionTitle, setQuestionTitle] = useState("");
  const [points, setPoints] = useState(1);
  const [answer, setAnswer] = useState("");
  const [isRequired, setIsRequired] = useState(false);

  // all combine

  // For setting the data in the question array
  useEffect(() => {
    const obj = {
      questionTitle: questionTitle,
      points: points,
      isRequired: isRequired,
      answer: answer,
      inputs: inputs,
    };
    // console.log("obj", obj);
    const updatedQuestions = [...questions];
    updatedQuestions[index] = obj;
    setQuestions(updatedQuestions);
  }, [inputs, questionTitle, points, answer, isRequired]);

  // handle Input change of options

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedValues = [...inputs];
    updatedValues[index] = value; // Update the value at the specified index
    setInputs(updatedValues);
  };

  return (
    <Flex
      gap={7}
      direction={"column"}
      p={4}
      mt={8}
      boxShadow={"md"}
      rounded={"lg"}
    >
      {" "}
      <Flex
        p={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {" "}
        {/* this is question */}
        <Input
          maxW={"lg"}
          variant={"flushed"}
          size={"md"}
          placeholder="Question 1"
          // Handle the question title
          onChange={(e) => {
            setQuestionTitle(e.target.value);
          }}
        />
        {/* This is points field */}
        <Flex gap={2}>
          <Text color={"gray.400"} fontSize={"md"} as="p">
            Points
          </Text>
          <NumberInput
            // Handled the points
            onChange={(e) => {
              setPoints(e);
            }}
            size="xs"
            maxW={16}
            defaultValue={5}
            min={points}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>{" "}
        </Flex>
      </Flex>
      {/* Radio Button */}
      <Flex gap={2} direction={"column"}>
        {inputs.map((text, index) => (
          <>
            <Flex
              justifyContent={"flex-start"}
              fontSize={"2xl"}
              alignItems={"center"}
              gap={3}
            >
              <BiRadioCircle cursor={"pointer"} />
              <Input
                maxW={"xs"}
                variant={"flushed"}
                placeholder={"option"}
                key={index}
                onChange={(e) => {
                  handleInputChange(e, index);
                }}
              />
              <Icon
                color={"grey.50"}
                _hover={{ color: "red.500" }}
                cursor={"pointer"}
                as={RxCross2}
              />
            </Flex>
          </>
        ))}
        <Flex
          my={2}
          justifyContent={"flex-start"}
          fontSize={"2xl"}
          alignItems={"center"}
          gap={3}
        >
          <BiRadioCircle cursor={"pointer"} />

          {/* This is to add options */}
          <Text
            cursor={"pointer"}
            color={"blue.400"}
            fontSize={"md"}
            _hover={{ textDecoration: "underline" }}
            onClick={() => {
              const lastItem = inputs[inputs.length - 1];
              const lastDigit = lastItem[lastItem.length - 1];
              const addEle = `option ${parseInt(lastDigit) + 1}`;
              setInputs([...inputs, addEle]);
            }}
          >
            Add Inputs
          </Text>

          <Popover isLazy>
            <PopoverTrigger>
              <Button
                size={"sm"}
                backgroundColor={answer === "" ? "yellow.400" : "green.400"}
                color={"black"}
              >
                Answer
              </Button>
            </PopoverTrigger>
            <PopoverContent fontSize={"sm"}>
              <PopoverHeader fontWeight="semibold">
                Select an Answer to this Question
              </PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                {/* This is to select the answer */}
                <Flex direction={"column"} gap={2}>
                  {inputs.map((text, index) => (
                    <>
                      {text !== "option NaN" ? (
                        <Button
                          onClick={(e) => {
                            setAnswer(text);
                            onClose();
                          }}
                        >
                          {text}
                        </Button>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex gap={3} alignItems={"center"} justifyContent={"flex-end"}>
        <Icon
          as={MdDelete}
          color={"red.500"}
          fontSize={"2xl"}
          cursor={"pointer"}
        />
        <Divider orientation="vertical" />

        <Text as="p"> Required </Text>
        <Switch
          onChange={(e) => {
            setIsRequired(!isRequired);
          }}
          id="isRequired"
          isChecked={isRequired}
        />
      </Flex>
    </Flex>
  );
};

export default Question;
