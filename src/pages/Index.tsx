import Avatar from "@/components/Avatar";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-radial from-futuristic-background to-futuristic-secondary">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">AI Assistant</h1>
          <p className="text-futuristic-text/80">Your personal AI-powered web development assistant</p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Avatar />
          <ChatInterface />
        </div>
      </div>
    </div>
  );
};

export default Index;