import { Dispatch } from "react";
import { Question as QuestionType } from "../types/types";
import { Action } from "../store/reducer.ts";
import { useState } from "react";

interface QuestionProps {
  question: QuestionType;
  index: number;
  score: number;
  dispatch: Dispatch<Action>;
  totalQuestions: number;
}

function Question({
  question,
  score,
  index,
  dispatch,
  totalQuestions,
}: QuestionProps) {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  function handleAnswer(isCorrect: boolean) {
    setAnswered(true);
    setIsCorrect(isCorrect);

    const newScore = isCorrect ? score + 1 : score;
    dispatch({ type: "answer", score: newScore });

    setTimeout(() => {
      setAnswered(false);
      setIsCorrect(null);
      if (index + 1 < totalQuestions) {
        dispatch({ type: "nextQuestion" });
      } else {
        dispatch({ type: "finished" });
      }
    }, 2000);
  }

  return (
    <div>
      {!answered ? (
        <>
          <h4>{question.name}</h4>
          <button onClick={() => handleAnswer(question.answer === "brat")}>
            brat
          </button>
          <button onClick={() => handleAnswer(question.answer === "not brat")}>
            not brat
          </button>
        </>
      ) : (
        <h1>{isCorrect ? "right" : "wrong"}</h1>
      )}
      <div className="score">{score}</div>
    </div>
  );
}

export default Question;
