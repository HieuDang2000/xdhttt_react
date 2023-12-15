// LoadingComponent.jsx
import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 border-solid h-12 w-12"></div>
      <p className="ml-2">Loading...</p>
    </div>
  );
};

export default LoadingComponent;
