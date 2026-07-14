import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="animate-pulse bg-gray-200 rounded-lg p-6 w-full h-48">
      <div className="h-6 bg-gray-300 rounded mb-4 w-1/3"></div>
      <div className="h-12 bg-gray-300 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
};

export default Skeleton;
