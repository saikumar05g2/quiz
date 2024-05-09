import React, { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import StartQuiz from "./components/StartQuiz";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {!quizStarted ? <StartQuiz startQuiz={startQuiz} /> : <Quiz />}
    </div>
  );
}

export default App;
