import { Dispatch } from "react";
import { Action } from "../store/reducer.ts";

interface FinishScreenProps {
  score: number;
  dispatch: Dispatch<Action>;
}

function FinishScreen({ score, dispatch }: FinishScreenProps) {
  return (
    <div>
      <h1>you got {score}</h1>
      <button onClick={() => dispatch({ type: "start" })}>try again</button>
    </div>
  );
}

export default FinishScreen;
