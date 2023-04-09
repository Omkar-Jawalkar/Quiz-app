import React from "react";
import Image from "next/image";
import {
  Input,
  Flex,
  Text,
  Heading,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MyContext } from "@/context/myContext";
import { useContext } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { user, setUser } = useContext(MyContext);
  const router = useRouter();
  return (
    <Flex
      direction={"row"}
      justifyContent={"space-between"}
      boxShadow={"md"}
      p={6}
      bgGradient={"linear(to-b, #0dc6b4,#21c68a)"}
    >
      <Heading
        cursor={"pointer"}
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
        as={"h2"}
      >
        Quiz App
      </Heading>
      <Flex justifyContent={"center"} alignItems={"center"} gap={6}>
        <Text
          cursor={"pointer"}
          fontSize={"xl"}
          display={{ base: "none", md: "inline" }}
          as={"h4"}
        >
          Hello, {user}
        </Text>
        <Image
          style={{
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={(e) => {
            onOpen();
          }}
          src={"/me.png"}
          width={50}
          height={50}
          alt="profile"
        ></Image>

        {/* This is Drawer */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Profile</DrawerHeader>

            <DrawerBody>
              <Flex gap={4} direction={"column"}>
                {user === "" ? (
                  <>
                    <Text fontSize={"lg"} as="p">
                      Enter your Name
                    </Text>
                    <Input id="namename" placeholder="Type here..." />
                  </>
                ) : (
                  <Text fontSize={"lg"} as="p">
                    Welcome {user} 🎉🎉
                  </Text>
                )}
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>

              {user === "" && (
                <Button
                  onClick={(e) => {
                    // here call with go to database with its id and update the name
                    e.preventDefault();
                    const name = document.getElementById("namename").value;
                    setUser(name);
                    onClose();
                  }}
                  colorScheme="blue"
                >
                  Save
                </Button>
              )}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default Navbar;
