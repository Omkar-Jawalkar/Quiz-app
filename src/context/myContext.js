import React, { useState } from "react";

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

  return (
    <MyContext.Provider value={{ data, user, setUser, setData, quiz, setQuiz }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyContextProvider };
