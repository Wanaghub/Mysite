import { useState } from "react";
import { Mic, Send } from "lucide-react";
import ChatBubble from "./ChatBubble";

const ChatInterface = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isAI: boolean }>>([
    { text: "Hello! How can I assist you today?", isAI: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isAI: false }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm processing your request...", isAI: true }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="h-[400px] overflow-y-auto glassmorphism p-4 mb-4">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg.text} isAI={msg.isAI} />
        ))}
      </div>
      
      <div className="flex gap-2">
        <button className="p-2 rounded-full glassmorphism hover:bg-futuristic-primary/20 transition-colors">
          <Mic className="w-6 h-6 text-futuristic-primary" />
        </button>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 glassmorphism p-4 text-futuristic-text placeholder:text-futuristic-text/50 focus:outline-none focus:ring-2 focus:ring-futuristic-primary/50"
        />
        
        <button
          onClick={handleSend}
          className="p-2 rounded-full glassmorphism hover:bg-futuristic-primary/20 transition-colors"
        >
          <Send className="w-6 h-6 text-futuristic-primary" />
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;