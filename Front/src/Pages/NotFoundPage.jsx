import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate()
  

  const goBack = () => {
    navigate(-1)
  };

  const goHome = () => {
    navigate('/'); 
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="text-center p-8 bg-white rounded-md shadow-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={goBack}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Go Back
          </button>
          <button
            onClick={goHome}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
