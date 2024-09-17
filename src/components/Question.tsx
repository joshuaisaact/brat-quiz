import { Dispatch } from "react";
import { Question as QuestionType } from "../types/types";
import { Action } from "../store/reducer.ts";
import { useState, useEffect } from "react";
import AnswerButtons from "./AnswerButtons.tsx";
import QuestionTitle from "./QuestionTitle.tsx";
import Score from "./Score.tsx";

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

  // Changes background colour of page depending on right or wrong answer
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
    <>
      {!answered ? (
        <>
          <QuestionTitle questionTopic={question.name} />
          <AnswerButtons
            onAnswer={handleAnswer}
            correctAnswer={question.answer}
          />
        </>
      ) : (
        <h1>{isCorrect ? "right" : "wrong"}</h1>
      )}

      <Score score={score} />
    </>
  );
}

export default Question;
