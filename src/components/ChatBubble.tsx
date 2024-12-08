import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  message: string;
  isAI?: boolean;
}

const ChatBubble = ({ message, isAI = false }: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        "max-w-[80%] p-4 mb-4 animate-fade-in",
        isAI ? "ml-4" : "ml-auto mr-4",
        isAI ? "glassmorphism" : "bg-futuristic-primary/20 rounded-xl"
      )}
    >
      <p className="text-futuristic-text">{message}</p>
    </div>
  );
};

export default ChatBubble;