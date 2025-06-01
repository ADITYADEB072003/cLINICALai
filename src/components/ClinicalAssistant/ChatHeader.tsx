import React from 'react';
import { Stethoscope, X, Maximize2, Minimize2 } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
  onToggleSize: () => void;
  isExpanded: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose, onToggleSize, isExpanded }) => {
  return (
    <div className="bg-gradient-to-r from-[#0067A5] to-[#00A3A1] text-white p-3 sm:p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
        <h2 className="font-bold text-base sm:text-lg">Athercare Clinical Assistant</h2>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={onToggleSize}
          className="text-white hover:text-gray-200 focus:outline-none transition-colors p-1"
          aria-label={isExpanded ? "Minimize chat" : "Maximize chat"}
        >
          {isExpanded ? (
            <Minimize2 className="h-5 w-5" />
          ) : (
            <Maximize2 className="h-5 w-5" />
          )}
        </button>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 focus:outline-none transition-colors p-1"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;