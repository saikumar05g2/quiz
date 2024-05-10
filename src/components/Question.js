import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const Question = ({
  question,
  showHint,
  showCorrectAnswer,
  handleAnswer,
  handleTimeUp,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  useEffect(() => {
    setSelectedAnswer(null);
  }, [question]);

  const selectAnswer = (index) => {
    setSelectedAnswer(index);
    handleAnswer(index);
  };
  const isCorrect = (index) => {
    return showCorrectAnswer && question.answer_index === index;
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <div>Ancient Rome Quiz</div>
        <span>
          <Timer handleTimeUp={handleTimeUp} />
        </span>
      </div>
      <div className="question">
        <h2>{question.question}</h2>
        <ul className="options">
          {question.choices.map((choice, index) => (
            <li key={index}>
              <button
                onClick={() => selectAnswer(index)}
                disabled={selectedAnswer !== null && selectedAnswer === index}
                className={isCorrect(index) && "answer" || showCorrectAnswer && selectedAnswer === index && selectedAnswer !==question.answer_index && 'incorrect'}
              >
                {choice}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {showHint && <p className="hint">Hint: {question.hint}</p>}
    </div>
  );
};

export default Question;
