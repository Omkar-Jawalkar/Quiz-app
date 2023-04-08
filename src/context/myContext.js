import React, { useState } from "react";

const MyContext = React.createContext();
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]); // Data is for considering all quiz
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    questions: [],
  }); // Quiz is for considering one quiz

  return (
    <MyContext.Provider value={{ data, setData, quiz, setQuiz }}>
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyContextProvider };
