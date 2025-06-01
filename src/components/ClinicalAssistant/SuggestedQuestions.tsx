import React from 'react';
import { useChatContext } from '../../context/ChatContext';

const suggestedQuestions = [
  "What are the current guidelines for managing acute coronary syndrome?",
  "Differential diagnosis for acute abdominal pain in elderly patients?",
  "Latest antibiotic recommendations for community-acquired pneumonia?",
  "What are the updated sepsis management protocols?",
  "Current stroke assessment and management guidelines?",
  "Evidence-based treatment for diabetic ketoacidosis?"
];

const SuggestedQuestions: React.FC = () => {
  const { setInputText } = useChatContext();

  const handleQuestionClick = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="mt-4 space-y-2">
      <p className="text-sm font-medium text-gray-600">Suggested Clinical Queries:</p>
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(question)}
            className="text-xs bg-white px-3 py-1.5 rounded-full border border-[#0067A5]/20 text-[#0067A5] hover:bg-[#0067A5]/5 transition-colors duration-200"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions