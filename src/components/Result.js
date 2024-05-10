import React from "react";
import { TiTick } from "react-icons/ti";

const Result = ({ score, totalQuestions, handleQuiz }) => {
  return (
    <div className="container">
      <div className="result-container">
        <h3 className="result-header">Result</h3>
        <div className="quiz-complete">
          {" "}
          <TiTick color="green" size={40} />
          <h2> Quiz Completed!</h2>
        </div>
        <p>
          Your score: {score} out of {totalQuestions}
        </p>
      </div>
    </div>
  );
};

export default Result;
