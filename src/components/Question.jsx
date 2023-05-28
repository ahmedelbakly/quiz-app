import React from "react";

const Question = ({
  selectedQues,
  onSubmit,
  answer,
  onOptionChange,
  score,
}) => {
  return (
    <>
      {" "}
      <h2>{selectedQues.que}</h2>
      <form onSubmit={onSubmit}>
        {selectedQues.choses.map((ch) => (
          <div key={ch} className="ch">
            {" "}
            <input
              type="radio"
              id="answer"
              name="answer"
              value={ch}
              checked={answer === ch}
              onChange={onOptionChange}
            />
             <label htmlFor="answer">{ch}</label>
            <br />
          </div>
        ))}
        <button type="submit" className="next-btn">
          Next
        </button>
        <p className="score">score: {score}</p>
      </form>
    </>
  );
};

export default Question;
