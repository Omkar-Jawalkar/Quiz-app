import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Eachquiz from "@/components/eachQuiz/Eachquiz";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import { Badge, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
const Index = ({ user, title }) => {
  const [param, setParam] = useState([]);
  const router = useRouter();
  // This is show data

  const [showData, setShowData] = useState([]);

  // Start Quiz

  const [startQuiz, setStartQuiz] = useState(false);

  // Getting context

  const [renderData, setRenderData] = useState({
    title: "",
    description: "",
    questions: [],
    timer: 0,
  });

  // Player name

  const [playerName, setPlayerName] = useState("");

  // Current Question State

  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    if (router && router.query) {
      // console.log(router.query);
      if (router.query.user && router.query.title) {
        let email = "";
        let number = 0;
        const combineUserAndId = atob(router.query.user);
        for (let i = combineUserAndId.length - 1; i >= 0; i--) {
          // If the current character is an underscore, split the string at that position
          if (combineUserAndId[i] === "_") {
            email = combineUserAndId.substring(0, i);
            number = parseInt(combineUserAndId.substring(i + 1));
            break; // exit the loop once the underscore is found
          }
        }

        // const email = combineUserAndId.match(emailRegex)[0];
        // const number = combineUserAndId.match(numberRegex)[0];
        setParam([email, number]);
      }
    }
  }, [router]);

  // Get the data
  useEffect(() => {
    const getData = async () => {
      if (param.length > 0) {
        const docRef = doc(db, "Users", param[0]);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data().data;
          if (data === undefined) {
            setShowData([]);
            return;
          }
          const dataArray = Object.keys(data)
            .filter((key) => !isNaN(parseInt(key)))
            .map((key) => data[key]);
          // console.log("dataArray", dataArray);
          // Length property not working fix this
          // setData(docSnap.data.data);
          // docSnap.data() will be undefined in this case
          // console.log("yoyo", param[1] - 1);
          // console.log("dataArray", dataArray[param[1] - 1]);
          setShowData(dataArray);
        }
      }
    };

    getData();
    console.log("param", param);
  }, [param]);

  // Set Render Question
  useEffect(() => {
    if (showData.length > 0) {
      setRenderData(showData[param[1] - 1]);
    }
  }, [showData]);

  useEffect(() => {
    console.log("renderData", renderData);
    console.log("renderData2", showData);
  }, [renderData]);

  return (
    <>
      {renderData.questions.length > 0 && startQuiz === true ? (
        <Eachquiz
          setCurrentQuestion={setCurrentQuestion}
          renderData={renderData}
          currentQuestion={currentQuestion}
        ></Eachquiz>
      ) : (
        <Flex
          m={10}
          p={10}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          gap={8}
          color={"white"}
        >
          <Heading as="h3">Start Quiz</Heading>
          <Text> All the Best !!!</Text>
          {renderData.title !== "" && (
            <Flex
              border={"1px solid #FEEE5B"}
              color={"white"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              p={10}
              borderRadius={"10px"}
              m={10}
              gap={7}
              maxW={"5xl"}
            >
              <Heading as="h4" fontSize={"xl"}>
                {" "}
                {renderData.title !== "" ? renderData.title : ""}{" "}
              </Heading>
              <Flex gap={4}>
                <Badge fontSize={"sm"} colorScheme="purple">
                  {" "}
                  {renderData.timer} Minutes{" "}
                </Badge>
                <Badge fontSize={"sm"} colorScheme="yellow">
                  {" "}
                  {renderData.questions.length} Questions{" "}
                </Badge>
              </Flex>
              <Text textAlign={"center"} as="p">
                {" "}
                {renderData.description !== "" ? renderData.description : ""}
              </Text>
            </Flex>
          )}
          <Flex gap={4} direction={"column"}>
            <Text textAlign={"center"} as="p" fontSize={"xl"}>
              {" "}
              Name should be more than 3 characters
            </Text>
            <Input
              onChange={(e) => {
                setPlayerName(e.target.value);
              }}
              size={"lg"}
              _placeholder={{
                color: "white.400",
              }}
              placeholder="Name"
            />
          </Flex>
          <Button
            backgroundColor={"green.400"}
            color={"white"}
            onClick={() => {
              setStartQuiz(true);
            }}
            isDisabled={playerName.length > 3 ? false : true}
          >
            Start
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Index;
