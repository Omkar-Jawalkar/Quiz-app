import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { db } from "@/services/firebase";
const MyContext = React.createContext();
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]); // Data is for considering all quiz
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    questions: [],
  });
  const [user, setUser] = useState("");

  const [finalResult, setFinalResult] = useState({
    pointsScored: 0,
    totalPoints: 0,
    totalQuestionsCount: 0,
    correctAnswerCount: 0,
  });
  // Quiz is for considering one quiz
  useEffect(() => {
    const getData = async () => {
      if (user !== "") {
        const docRef = doc(db, "Users", user);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data().data;
          if (data === undefined) {
            setData([]);
            return;
          }
          const dataArray = Object.keys(data)
            .filter((key) => !isNaN(parseInt(key)))
            .map((key) => data[key]);
          console.log("dataArray", dataArray);
          // Length property not working fix this
          // setData(docSnap.data.data);
          // docSnap.data() will be undefined in this case
          setData(dataArray);
        }
      }
    };

    getData();
  }, [user]);
  return (
    <MyContext.Provider
      value={{
        data,
        user,
        finalResult,
        setFinalResult,
        setUser,
        setData,
        quiz,
        setQuiz,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyContextProvider };
