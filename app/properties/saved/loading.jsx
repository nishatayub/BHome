import React from 'react';
import { ClipLoader } from 'react-spinners';

const SavedPropertiesLoading = () => {
  return (
    <section className="bg-blue-50 min-h-screen">
      <div className="container m-auto py-24 px-6">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <ClipLoader color="#3b82f6" size={150} />
        </div>
      </div>
    </section>
  );
};

export default SavedPropertiesLoading;
