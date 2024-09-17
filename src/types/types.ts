import { ReactNode } from "react";

export interface Question {
  name: string;
  answer: "brat" | "not brat";
}

export interface State {
  questions: Question[];
  status: "loading" | "ready" | "error" | "active" | "finished";
  index: number;
  score: number;
}

export interface MainProps {
  children: ReactNode;
}
