import React, { useState } from 'react';
import ChatToggleButton from './ChatToggleButton';
import ChatWindow from './ChatWindow';
import { useChatContext } from '../../context/ChatContext';

const ChatInterface: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isLoading } = useChatContext();

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <ChatToggleButton onClick={toggleChat} isLoading={isLoading} />
      <ChatWindow isVisible={isVisible} onClose={() => setIsVisible(false)} />
    </>
  );
};

export default ChatInterface;