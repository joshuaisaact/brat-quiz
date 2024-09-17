import { MainProps } from "../types/types";
import "./App.css";

function Main({ children }: MainProps) {
  return <main className="main">{children}</main>;
}

export default Main;
