import React from "react";
import { Link } from "react-router-dom";

const QuizHome = () => {
  return (
    <div className="quiz-home">
      <div className="quiz-title">
        <h1>quiz app</h1>
      </div>

      <div className="quiz-start">
        <p>enjoy with my quiz</p>
        <Link to= "/quiz">start quiz</Link>
      </div>
    </div>
  );
};

export default QuizHome;
