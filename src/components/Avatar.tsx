const Avatar = () => {
  return (
    <div className="relative">
      <div className="w-32 h-32 rounded-full glassmorphism flex items-center justify-center animate-float overflow-hidden">
        <div className="absolute inset-0 rounded-full animate-ripple border-2 border-futuristic-primary" />
        <div className="absolute inset-0 rounded-full animate-ripple border-2 border-futuristic-primary [animation-delay:1s]" />
        <img 
          src="/lovable-uploads/8617ed1e-b0e8-4d38-a8be-2973c9f4dd41.png"
          alt="AI Assistant Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;