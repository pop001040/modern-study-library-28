import { Button } from "../ui/button";
import { Phone } from "lucide-react";

interface ChatActionsProps {
  onStartProject: () => void;
}

export const ChatActions = ({ onStartProject }: ChatActionsProps) => {
  return (
    <div className="p-4 border-t space-y-4">
      <Button 
        onClick={onStartProject}
        className="w-full bg-green-500 hover:bg-green-600 text-white"
      >
        ابدأ مشروعك
      </Button>

      <div className="flex items-center justify-center gap-2 text-green-600">
        <span>للتواصل معنا:</span>
        <Phone className="h-4 w-4" />
        <a href="tel:01030435987" className="hover:underline">01030435987</a>
      </div>
    </div>
  );
};