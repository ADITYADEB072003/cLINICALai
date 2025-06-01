import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Message } from '../types';
import { useAIService } from '../services/useAIService';

interface ChatContextType {
  messages: Message[];
  inputText: string;
  isLoading: boolean;
  setInputText: (text: string) => void;
  sendMessage: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { generateAIResponse } = useAIService();

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      sender: 'You',
      text: inputText,
      type: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await generateAIResponse(inputText);
      
      const botMessage: Message = {
        sender: 'Athercare Clinical Assistant',
        text: response,
        type: 'bot',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      
      const errorMessage: Message = {
        sender: 'Athercare Clinical Assistant',
        text: 'I apologize, but I encountered an issue retrieving that information. Please try again or rephrase your question.',
        type: 'bot',
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    messages,
    inputText,
    isLoading,
    setInputText,
    sendMessage,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};