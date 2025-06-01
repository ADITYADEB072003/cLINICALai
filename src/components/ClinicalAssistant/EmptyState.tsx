import React from 'react';
import { FileText, Microscope, Clipboard, Stethoscope, BookOpen, Pill } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-3 sm:space-y-4 p-3 sm:p-4">
      <div className="bg-[#0067A5]/10 p-3 rounded-full">
        <Microscope className="h-10 w-10 sm:h-12 sm:w-12 text-[#0067A5]" />
      </div>
      <p className="font-medium text-sm sm:text-base text-gray-700">
        Your Clinical Assistant
      </p>
      <p className="text-xs sm:text-sm max-w-xs">
        Access evidence-based clinical information, guidelines, and differential diagnoses to support your medical decision-making.
      </p>
      <div className="grid grid-cols-2 gap-3 mt-2 w-full max-w-xs">
        <SuggestionButton
          icon={<FileText className="h-4 w-4 mr-2" />}
          text="Latest ACLS guidelines for VFib"
        />
        <SuggestionButton
          icon={<Stethoscope className="h-4 w-4 mr-2" />}
          text="DDx for acute chest pain"
        />
        <SuggestionButton
          icon={<BookOpen className="h-4 w-4 mr-2" />}
          text="Current sepsis criteria"
        />
        <SuggestionButton
          icon={<Pill className="h-4 w-4 mr-2" />}
          text="Antibiotic coverage spectrum"
        />
      </div>
    </div>
  );
};

interface SuggestionButtonProps {
  icon: React.ReactNode;
  text: string;
}

const SuggestionButton: React.FC<SuggestionButtonProps> = ({ icon, text }) => {
  return (
    <button className="flex items-center justify-center px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 hover:bg-gray-50 transition-colors">
      {icon}
      <span className="truncate">{text}</span>
    </button>
  );
};

export default EmptyState;