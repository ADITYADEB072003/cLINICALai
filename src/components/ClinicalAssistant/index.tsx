import React from 'react';
import ChatInterface from './ChatInterface';
import { ChatProvider } from '../../context/ChatContext';

const ClinicalAssistant: React.FC = () => {
  return (
    <ChatProvider>
      <ChatInterface />
    </ChatProvider>
  );
};

export default ClinicalAssistant;