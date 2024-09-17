import { Dispatch } from "react";
import { Action } from "../store/reducer.ts";
import Button from "./Button.tsx";

interface FinishScreenProps {
  score: number;
  dispatch: Dispatch<Action>;
}

function FinishScreen({ score, dispatch }: FinishScreenProps) {
  return (
    <div className="result">
      <h1>you got {score}</h1>
      <Button onClick={() => dispatch({ type: "start" })}>try again</Button>
    </div>
  );
}

export default FinishScreen;
