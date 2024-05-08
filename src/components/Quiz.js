import React, { useState, useEffect, useCallback } from 'react';
import Question from './Question';
import Result from './Result';
import { questions } from './Data';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    let timer;
    
    if (timeUp) {
        // setShowCorrectAnswer(true);
        timer = setTimeout(() => {
            setShowCorrectAnswer(false);
            setCurrentQuestion(currentQuestion + 1);
            setTimeUp(false);
        }, 1000);
    }

    if (currentQuestion < questions.length) {
        timer = setTimeout(() => {
            setShowHint(true);
        }, 10000);
    }

    return () => clearTimeout(timer);
}, [timeUp, currentQuestion]);


  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer_index) {
      setScore(score + 1);
    }
    setShowHint(false);
  };

  const handleTimeUp = useCallback(() => {
    setShowHint(false);
    setShowCorrectAnswer(true);
    setTimeUp(true);
  },[timeUp]);

  const renderQuiz = () => {
    if (currentQuestion >= questions.length) {
      setQuizCompleted(true);
    } else {
      return (
        <Question
          question={questions[currentQuestion]}
          showHint={showHint}
          showCorrectAnswer={showCorrectAnswer}
          handleAnswer={handleAnswer}
          handleTimeUp={handleTimeUp}
        />
      );
    }
  };

  return (
    <div>
      {quizCompleted ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        renderQuiz()
      )}
    </div>
  );
};

export default Quiz;