import React, { useState, useEffect } from 'react';
import Timer from './Timer';

const Question = ({ question, showHint, showCorrectAnswer, handleAnswer, handleTimeUp }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [question]);

  const selectAnswer = (index) => {
    setSelectedAnswer(index);
    handleAnswer(index);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      {showHint && <p>{question.hint}</p>}
      {showCorrectAnswer && (
        <p>Correct answer: {question.choices[question.answer_index]}</p>
      )}
      <Timer handleTimeUp={handleTimeUp} />
      <ul>
        {question.choices.map((choice, index) => (
          <li key={index}>
            <button
              onClick={() => selectAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;