import React from "react";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Badge,
  Button,
  Heading,
  Text,
  useDisclosure,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Divider,
  useToast,
  InputRightAddon,
  Toast,
} from "@chakra-ui/react";
import { AiOutlineLink } from "react-icons/ai";
import MyAlertBox from "@/components/AlertBox/AlertBox";
import { BiShareAlt } from "react-icons/bi";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import { useRouter } from "next/router";
const Index = () => {
  // Toast
  const toast = useToast();

  //  This is Router

  const router = useRouter();

  // this is alert box
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  //this is id
  let sendingIndex = 0;

  //This is Context

  const { data, user } = useContext(MyContext);

  // This are for sharing model
  const [sharableLink, setSharableLink] = React.useState(
    "https://quiz-app-ashen.vercel.app/"
  );
  // const { isOpen, onOpen, onClose } = useDisclosure();

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
              {/* <Button
                backgroundColor={"blue.500"}
                color={"white"}
                onClick={() => router.push("/")}
              >
                {" "}
                Go back and Create Quiz
              </Button> */}
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
                    {/* <Badge fontSize={"sm"} colorScheme="purple">
                      {" "}
                      {quiz.timer} Minutes{" "}
                    </Badge> */}
                  </Heading>
                  <Flex gap={4}>
                    <Badge fontSize={"sm"} colorScheme="purple">
                      {" "}
                      {quiz.timer} Minutes{" "}
                    </Badge>
                    <Badge fontSize={"sm"} colorScheme="yellow">
                      {" "}
                      {quiz.questions.length} Questions{" "}
                    </Badge>
                  </Flex>
                  {/* <Badge fontSize={"sm"} colorScheme="yellow">
                    {" "}
                    {quiz.questions.length} Questions{" "}
                  </Badge> */}
                  <Text display={{ sm: "flex" }}> {quiz.description} </Text>
                  <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
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
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      onClick={() => {
                        onOpen();
                        const _ = quiz.title.replaceAll(" ", "-");
                        const combineEmailAndIndex =
                          user + "_" + (index + 1).toString();

                        setSharableLink(btoa(combineEmailAndIndex));
                        setSharableLink(
                          `https://quiz-app-omkar.vercel.app/shared/${btoa(
                            combineEmailAndIndex
                          )}/${_}`
                        );
                      }}
                    >
                      {" "}
                      Share <Icon pl={2} fontSize={"3xl"} as={BiShareAlt} />
                    </Button>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        )}
        <Button
          my={4}
          onClick={() => {
            router.push("/");
          }}
          bgColor={"blue.400"}
          color={"white"}
        >
          {data.length === 0 ? "Go Back and Create Quiz" : "Back"}
        </Button>
      </>
      {/* This is model to be opened to share link */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share Quiz</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <Input
                contentEditable={false}
                value={sharableLink}
                type="text"
                placeholder="Share Link"
              />
              <InputRightAddon
                // pointerEvents="none"
                onClick={() => {
                  // This should copy the link to clipboard
                  navigator.clipboard.writeText(sharableLink);
                  toast({
                    title: "Link Copied",
                    duration: 1000,
                    isClosable: true,
                    status: "info",
                  });
                }}
                cursor={"pointer"}
              >
                <Icon as={AiOutlineLink} fontSize={"2xl"} color="gray.700" />
              </InputRightAddon>
            </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
