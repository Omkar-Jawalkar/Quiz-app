import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ReverseCountdownTimer = ({ minutes }) => {
  const [countdown, setCountdown] = useState(minutes * 60); // convert minutes to seconds

  // importing router

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const minutesLeft = Math.floor(countdown / 60);
  const secondsLeft = countdown % 60;

  const formattedMinutes = String(minutesLeft).padStart(2, "0"); // Add leading zero if minutes is a single digit
  const formattedSeconds = String(secondsLeft).padStart(2, "0"); // Add leading zero if seconds is a single digit

  if (countdown <= 0) {
    // Push to successfully Submitted Quiz Page
    router.push("/attemptquiz");
  }

  return (
    <Text
      backgroundColor={"gray.100"}
      px={3}
      py={2}
      rounded={"full"}
      color={"red.600"}
      fontSize="24px"
      textAlign="center"
    >
      Timer - {formattedMinutes} : {formattedSeconds}
    </Text>
  );
};

export default ReverseCountdownTimer;
