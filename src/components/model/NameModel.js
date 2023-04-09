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
import { MyContext } from "@/context/myContext";
import { useContext } from "react";
const NameModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <ModalHeader>Please Enter your Name 🙇‍♂️</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            direction={"column"}
            gap={2}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Text fontSize={"lg"} as="p">
              Hey, would you mind entering your name? 🙋‍♂️
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
              onClick={(e) => {
                e.preventDefault();
                const name = document.getElementById("user_name").value;
                if (name.length < 6) {
                  toast({
                    title: "Please enter a name with more than 6 characters",
                    status: "info",
                    isClosable: true,
                    duration: 3000,
                  });
                  return;
                } else {
                  setUser(name);
                  onClose();
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
