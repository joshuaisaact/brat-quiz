import { Dispatch } from "react";
import { Question as QuestionType } from "../types/types";
import { Action } from "../store/reducer.ts";
import { useState, useEffect } from "react";
import Button from "./Button.tsx";

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

  useEffect(
    function () {
      if (answered) {
        document.body.style.backgroundColor = isCorrect ? "#8acf00" : "red";
      } else {
        document.body.style.backgroundColor = "white";
      }

      return () => {
        document.body.style.backgroundColor = "";
      };
    },
    [answered, isCorrect],
  );

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
          <Button onClick={() => handleAnswer(question.answer === "brat")}>
            brat
          </Button>
          <Button onClick={() => handleAnswer(question.answer === "not brat")}>
            not brat
          </Button>
        </>
      ) : (
        <h1>{isCorrect ? "right" : "wrong"}</h1>
      )}
      <div className="score">{score}</div>
    </div>
  );
}

export default Question;
