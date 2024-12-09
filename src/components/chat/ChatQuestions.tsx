import { Button } from "../ui/button";

interface ChatQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export const ChatQuestions = ({ questions, onQuestionClick }: ChatQuestionsProps) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {questions.map((question) => (
        <Button
          key={question}
          variant="outline"
          className="text-right justify-start hover:bg-green-50"
          onClick={() => onQuestionClick(question)}
        >
          {question}
        </Button>
      ))}
    </div>
  );
};