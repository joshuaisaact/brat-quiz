import { Dispatch } from "react";
import { Action } from "../store/reducer.ts";
import Button from "./Button.tsx";

interface StartScreenProps {
  dispatch: Dispatch<Action>;
}

function StartScreen({ dispatch }: StartScreenProps) {
  return (
    <div>
      <h1>brat</h1>
      <h1>or</h1>
      <h1>not</h1>
      <Button onClick={() => dispatch({ type: "start" })}>start</Button>
    </div>
  );
}

export default StartScreen;
