import Button from "./Button";

interface AnswerButtonsProps {
  onAnswer: (isCorrect: boolean) => void;
  correctAnswer: "brat" | "not brat";
}

function AnswerButtons({ onAnswer, correctAnswer }: AnswerButtonsProps) {
  return (
    <div>
      <Button onClick={() => onAnswer(correctAnswer === "brat")}>brat</Button>
      <Button onClick={() => onAnswer(correctAnswer === "not brat")}>
        not brat
      </Button>
    </div>
  );
}

export default AnswerButtons;
