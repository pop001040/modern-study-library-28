interface ChatMessageProps {
  text: string;
  sender: 'bot' | 'user';
}

export const ChatMessage = ({ text, sender }: ChatMessageProps) => {
  return (
    <div className={`flex ${sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          sender === 'bot'
            ? 'bg-gray-100'
            : 'bg-green-500 text-white'
        }`}
      >
        {text}
      </div>
    </div>
  );
};