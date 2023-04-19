import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
const Index = ({ user, title }) => {
  const [param, setParam] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router && router.query) {
      // console.log(router.query);
      if (router.query.user && router.query.title) {
        const combineUserAndId = atob(router.query.user);
        const emailRegex = /[^_]+@[^_]+\.[a-z]+/;
        const numberRegex = /\d+/;

        const email = combineUserAndId.match(emailRegex)[0];
        const number = combineUserAndId.match(numberRegex)[0];
        setParam([email, number]);
      }
    }
  }, [router]);

  

  return (
    <Flex color={"white"}>
     
    </Flex>
  );
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // console.log("user", user, "title", title);

//   // const res = await fetch(`https://.../data`);
//   // const data = await res.json();

//   // Pass data to the page via props
//   return { props: { user, title } };
// }

export default Index;
