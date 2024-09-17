import { useEffect } from "react";
import styles from "./QuestionTitle.module.css";

interface QuestionTitleProps {
  questionTopic: string;
}

function QuestionTitle({ questionTopic }: QuestionTitleProps) {
  // Changes title of page based on question
  useEffect(
    function () {
      const originalTitle = document.title;
      document.title = questionTopic;

      return () => {
        document.title = originalTitle;
      };
    },
    [questionTopic],
  );

  return <h1 className={styles.question}>{questionTopic}</h1>;
}

export default QuestionTitle;
