import React, { useRef, useEffect } from 'react';
import { useChatContext } from '../../context/ChatContext';
import ChatMessage from './ChatMessage';
import EmptyState from './EmptyState';
import LoadingIndicator from './LoadingIndicator';
import SuggestedQuestions from './SuggestedQuestions';

interface ChatMessagesProps {
  isExpanded: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ isExpanded }) => {
  const { messages, isLoading } = useChatContext();
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatWindowRef}
      className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50"
      style={{ 
        height: isExpanded ? 'calc(100vh - 180px)' : 'calc(90vh - 180px)',
        minHeight: '280px'
      }}
    >
      {messages.length === 0 ? (
        <>
          <EmptyState />
          <SuggestedQuestions />
        </>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isLoading && <LoadingIndicator />}
          {!isLoading && <SuggestedQuestions />}
        </div>
      )}
    </div>
  );
};

export default ChatMessages