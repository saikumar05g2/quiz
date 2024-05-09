const StartQuiz = ({ startQuiz }) => {
  return (
    <div className="container">
      <div className="quiz-container">
        <h3 className="result-header">Ancient Rome Quiz</h3>
        <ol className="instructions">
          <li>Read the question carefully before answering.</li>
          <li>You will have 20 seconds for each question.</li>
          <li>You will get the score once the quiz is completed.</li>
        </ol>
        <button onClick={startQuiz} className="start-button">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartQuiz;
