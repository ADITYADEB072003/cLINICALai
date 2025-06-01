import React from 'react';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';
  
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs sm:max-w-sm md:max-w-md rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
          isUser
            ? "bg-[#0067A5] text-white rounded-br-none"
            : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
        }`}
      >
        <div
          className={`font-medium text-xs sm:text-sm mb-1 ${
            isUser
              ? "text-blue-100"
              : "text-[#0067A5]"
          }`}
        >
          {message.sender}
        </div>
        <div className="whitespace-pre-wrap text-xs sm:text-sm">
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;