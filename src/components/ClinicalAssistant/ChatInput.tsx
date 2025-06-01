import React from 'react';
import { Send } from 'lucide-react';
import { useChatContext } from '../../context/ChatContext';

const ChatInput: React.FC = () => {
  const { inputText, setInputText, sendMessage, isLoading } = useChatContext();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="p-2 sm:p-3 bg-white border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter clinical questions or cases..."
          className="flex-1 py-2 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0067A5] focus:border-transparent resize-none text-sm min-h-10 max-h-32"
          rows={1}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !inputText.trim()}
          className={`p-2 rounded-full ${
            isLoading || !inputText.trim()
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-[#0067A5] to-[#00A3A1] text-white hover:shadow-md"
          } focus:outline-none transition-all duration-300`}
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
      <div className="text-xs text-gray-500 mt-1 sm:mt-2 text-center">
        For clinical questions, references, and medical guidance
      </div>
    </div>
  );
};

export default ChatInput;