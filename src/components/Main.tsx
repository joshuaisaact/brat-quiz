import { MainProps } from "../types/types";
import styles from "./Main.module.css";

function Main({ children }: MainProps) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;
