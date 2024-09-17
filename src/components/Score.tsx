import styles from "./Score.module.css";

interface ScoreProps {
  score: number;
}

function Score({ score }: ScoreProps) {
  return (
    <div className={styles.score}>
      <p>score: {score}</p>
    </div>
  );
}

export default Score;
