import React from "react";
import {Link} from "react-router-dom"
export const QuizEnd = ({ score, restart }) => {
  return (
    <div className="quiz-end">
      <h2>quiz ended</h2>
      <p>your score: {score}</p>
      <div>
        {" "}
        <button className="hover" onClick={restart}>restart</button>
        <Link className="hover" to="/">Home</Link>
      </div>
    </div>
  );
};
