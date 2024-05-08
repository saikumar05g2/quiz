import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;