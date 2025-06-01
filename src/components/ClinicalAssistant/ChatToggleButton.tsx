import React from 'react';
import { Stethoscope, Loader } from 'lucide-react';

interface ChatToggleButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-[#0067A5] to-[#00A3A1] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0067A5] z-50"
      onClick={onClick}
      aria-label="Toggle clinical assistant"
    >
      {isLoading ? (
        <Loader className="h-6 w-6 sm:h-8 sm:w-8 animate-spin" />
      ) : (
        <Stethoscope className="h-6 w-6 sm:h-8 sm:w-8" />
      )}
    </button>
  );
};

export default ChatToggleButton;