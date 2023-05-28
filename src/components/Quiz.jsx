import React from "react";
import { useState } from "react";
import { QuizEnd } from "./QuizEnd";
import { questions } from "../data";
import Question from "./Question";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState();
  const [Length, setLength] = useState(0);

  ///////////////////////////////////////////////////////////////

  const selectedQues = questions[index];
  const onOptionChange = (e) => {
    setAnswer(e.target.value);
  };
  /////////////////////////////////////////////////////////////////
  const onSubmit = (e) => {
    e.preventDefault();

    if (answer === questions[index].answer) {
      setScore(score + 1);
    }
    setLength(Length + 1);
    if (index < questions.length - 1) {
      setIndex(index + 1);
    }
  };
  /////////////////////////////////////////////////////////////////

  const restart = () => {
    setIndex(0);
    setLength(0);
    setScore(0);
  };
  return (
    <div>
      <div className="quiz-title">
        <h1>quiz app</h1>
      </div>

      <div className="quiz">
        <div className="ques-container">
          {Length === questions.length ? (
            <QuizEnd score={score} restart={restart} />
          ) : (
            <Question
              score={score}
              onOptionChange={onOptionChange}
              answer={answer}
              onSubmit={onSubmit}
              selectedQues={selectedQues}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
