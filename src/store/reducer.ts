import { State, Question } from "../types/types";

export type Action =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "answer"; score: number }
  | { type: "nextQuestion" }
  | { type: "finished" };

export const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  score: 0,
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        index: 0,
        score: 0,
      };
    case "answer":
      return {
        ...state,
        score: action.score,
        status: "answered",
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        status: "active",
      };
    case "finished":
      return {
        ...state,
        status: "finished",
      };
    default:
      throw new Error("Action is unknown");
  }
}
