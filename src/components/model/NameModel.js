import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  Text,
  Input,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { app, firebaseConfig } from "@/services/firebase";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
import { getFirestore } from "firebase/firestore";
const NameModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const db = getFirestore(app);
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const toast = useToast();
  const { user, setUser } = useContext(MyContext);
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
  );
  useEffect(() => {
    if (user.length < 6) {
      onOpen();
    }
  }, []);

  // This is for validating email

  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex
    return emailRegex.test(email);
  }

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      blockScrollOnMount={true}
      closeOnOverlayClick={false}
    >
      <OverlayOne />;
      <ModalContent>
        <ModalHeader>Please Enter your Email 🙇‍♂️</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            direction={"column"}
            gap={2}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Text fontSize={"lg"} as="p">
              Hey, would you mind entering your Email? 🙋‍♂️
            </Text>
            <Divider />
            <Input
              autoComplete="off"
              id="user_name"
              ref={initialRef}
              placeholder="First name"
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex w={"full"}>
            <Button
              onClick={async (e) => {
                e.preventDefault();
                const name = document.getElementById("user_name").value;
                console.log(name);
                const val = validateEmail(name);
                console.log("val", val);
                if (val === false) {
                  toast({
                    title: "Please enter a valid Email",
                    status: "warning",
                    isClosable: true,
                    duration: 3000,
                  });
                  return;
                } else {
                  try {
                    await setDoc(
                      doc(db, "Users", name),
                      { capital: true },
                      { merge: true }
                    );
                    toast({
                      title: " DONEONE 🎉 ",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                    setUser(name);
                    onClose();
                  } catch (e) {
                    console.error("Error adding document: ", e);
                    toast({
                      title: "Error adding document: ",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    });
                    onClose();
                  }
                }
              }}
              textAlign={"center"}
              w={"full"}
              colorScheme="blue"
            >
              Save
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NameModel;