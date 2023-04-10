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
  // Quiz is for considering one quiz
  useEffect(() => {
    const getData = async () => {
      if (user !== "") {
        const docRef = doc(db, "Users", user);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data.data);

          // Length property not working fix this
          // setData(docSnap.data.data);
          // docSnap.data() will be undefined in this case
        }
      }
    };

    getData();
  }, [user]);
  return (
    <MyContext.Provider value={{ data, user, setUser, setData, quiz, setQuiz }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyContextProvider };
