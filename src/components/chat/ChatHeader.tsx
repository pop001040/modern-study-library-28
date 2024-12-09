import { MinusCircle, X } from "lucide-react";

interface ChatHeaderProps {
  onMinimize: () => void;
  onClose: () => void;
}

export const ChatHeader = ({ onMinimize, onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-green-500 text-white rounded-t-lg">
      <div className="flex items-center gap-3">
        <img
          src="/lovable-uploads/82199cc1-f625-4721-8601-ee8757c421ad.png"
          alt="مساعد Green Light"
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
        <span className="font-bold">مساعد Green Light</span>
      </div>
      <div className="flex gap-2">
        <button onClick={onMinimize}>
          <MinusCircle className="w-6 h-6" />
        </button>
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};