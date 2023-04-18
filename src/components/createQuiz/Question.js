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

const Question = ({ update, question, index, questions, setQuestions }) => {
  // this is for popover
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [inputs, setInputs] = useState(
    update === true ? question.inputs : [""]
  );
  const [questionTitle, setQuestionTitle] = useState(
    update === true ? question.questionTitle : ""
  );

  // console.log("questionTitle", question.questionTitle);
  const [points, setPoints] = useState(update === true ? question.points : 1);
  const [answer, setAnswer] = useState(update === true ? question.answer : "");
  const [isRequired, setIsRequired] = useState(
    update === true ? question.isRequired : false
  );

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
      border={"1px solid #FEEE5B"}
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
          _placeholder={{ color: "gray.400" }}
          maxW={"lg"}
          variant={"flushed"}
          size={"md"}
          placeholder={`Question ${index + 1}`}
          // Handle the question title
          value={questionTitle}
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
            _placeholder={{ color: "gray.400" }}
            // Handled the points
            onChange={(e) => {
              setPoints(e);
            }}
            size="xs"
            maxW={16}
            defaultValue={points}
            min={1}
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
                _placeholder={{ color: "gray.400" }}
                maxW={"xs"}
                variant={"flushed"}
                placeholder={"option"}
                key={index}
                onChange={(e) => {
                  handleInputChange(e, index);
                }}
                value={text}
              />
              <Icon
                color={"grey.50"}
                _hover={{ color: "red.500" }}
                cursor={"pointer"}
                as={RxCross2}
                // handle delete
                onClick={(e) => {
                  const updatedValues = [...inputs];
                  updatedValues.splice(index, 1);
                  // console.log("newValues", updatedValues);
                  setInputs(updatedValues);
                }}
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
              setInputs([...inputs, ""]);
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
          // Handle delete of questions

          onClick={(e) => {
            const updatedQuestions = [...questions];
            updatedQuestions.splice(index, 1);
            setQuestions(updatedQuestions);
          }}
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
