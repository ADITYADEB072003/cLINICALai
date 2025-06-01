import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

interface ChatWindowProps {
  isVisible: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isVisible, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
  };

  const windowClasses = isExpanded
    ? 'fixed inset-4 max-w-full max-h-full'
    : 'fixed bottom-0 right-0 sm:bottom-24 sm:right-6 w-full sm:w-96 md:w-[28rem]';

  return (
    <div
      className={`${windowClasses} bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden z-40 transition-all duration-300 transform ${
        isVisible
          ? 'scale-100 opacity-100'
          : 'scale-95 opacity-0 pointer-events-none'
      }`}
      style={{ 
        maxHeight: isVisible ? (isExpanded ? '100%' : '90vh') : '0',
        height: 'auto'
      }}
    >
      <ChatHeader onClose={onClose} onToggleSize={toggleSize} isExpanded={isExpanded} />
      <ChatMessages isExpanded={isExpanded} />
      <ChatInput />
    </div>
  );
};

export default ChatWindow;