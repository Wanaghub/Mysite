import { User2 } from "lucide-react";

const Avatar = () => {
  return (
    <div className="relative">
      <div className="w-32 h-32 rounded-full glassmorphism flex items-center justify-center animate-float">
        <div className="absolute inset-0 rounded-full animate-ripple border-2 border-futuristic-primary" />
        <div className="absolute inset-0 rounded-full animate-ripple border-2 border-futuristic-primary [animation-delay:1s]" />
        <User2 className="w-16 h-16 text-futuristic-primary" />
      </div>
    </div>
  );
};

export default Avatar;