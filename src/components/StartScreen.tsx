import { Dispatch } from "react";
import { Action } from "../store/reducer.ts";

interface StartScreenProps {
  numQuestions: number;
  dispatch: Dispatch<Action>;
}

function StartScreen({ numQuestions, dispatch }: StartScreenProps) {
  return (
    <div>
      <h2>brat</h2>
      <h3>{numQuestions} questions to test your brat knowledge</h3>
      <button onClick={() => dispatch({ type: "start" })}>Let's Start!</button>
    </div>
  );
}

export default StartScreen;
