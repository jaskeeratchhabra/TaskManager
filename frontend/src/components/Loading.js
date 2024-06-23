import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default Loading;
