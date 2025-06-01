import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-3 py-2 sm:px-4 sm:py-3 border border-gray-200 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#0067A5] animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-[#0067A5] animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-[#0067A5] animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;