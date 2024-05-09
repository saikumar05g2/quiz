import React, { useState, useEffect, useCallback } from "react";
import Question from "./Question";
import Result from "./Result";
import { questions } from "./Data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    setSelectedQuestions(shuffledQuestions.slice(0, 5));
  }, []);

  useEffect(() => {
    let timer;
    if (timeUp) {
      timer = setTimeout(() => {
        setShowCorrectAnswer(false);
        setCurrentQuestion(currentQuestion + 1);
        setTimeUp(false);
      }, 1000);
    }

    if (currentQuestion < selectedQuestions.length) {
      timer = setTimeout(() => {
        setShowHint(true);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [timeUp, currentQuestion, selectedQuestions]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === selectedQuestions[currentQuestion].answer_index) {
      setScore(score + 1);
    }
    setShowHint(false);
  };

  const handleTimeUp = useCallback(() => {
    setShowHint(false);
    setShowCorrectAnswer(true);
    setTimeUp(true);
  }, [timeUp]);

  const renderQuiz = () => {
    if (selectedQuestions.length === 0) {
      return <div>Loading...</div>;
    }
    if (currentQuestion >= selectedQuestions.length) {
      setQuizCompleted(true);
    } else {
      return (
        <Question
          question={selectedQuestions[currentQuestion]}
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
        <Result score={score} totalQuestions={selectedQuestions.length} />
      ) : (
        renderQuiz()
      )}
    </div>
  );
};

export default Quiz;
