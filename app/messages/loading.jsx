import React from 'react';
import { ClipLoader } from 'react-spinners';

const MessagesLoading = () => {
  return (
    <section className="bg-blue-50 min-h-screen">
      <div className="container m-auto py-24 px-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
            <div className="animate-pulse">
              <div className="h-8 bg-blue-400 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-blue-400 rounded w-1/6"></div>
            </div>
          </div>
          <div className="flex justify-center py-16">
            <ClipLoader color="#3b82f6" size={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesLoading;
