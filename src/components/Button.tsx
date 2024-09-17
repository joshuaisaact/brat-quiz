import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode; // This allows any JSX to be passed as children
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
