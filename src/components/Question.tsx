import { Dispatch } from "react";
import { Question as QuestionType } from "../types/types";
import { Action } from "../store/reducer.ts";

interface QuestionProps {
  question: QuestionType;
  dispatch: Dispatch<Action>;
}

function Question({ question, dispatch }: QuestionProps) {
  console.log(question);

  return (
    <div>
      <h4>{question.name}</h4>

      <button onClick={() => dispatch({ type: "finished" })}>brat</button>
      <button>not brat</button>
    </div>
  );
}

export default Question;
