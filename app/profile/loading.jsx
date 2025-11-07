import React from 'react';
import { ClipLoader } from 'react-spinners';

const ProfileLoading = () => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24 px-6">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <ClipLoader color="#3b82f6" size={150} />
        </div>
      </div>
    </section>
  );
};

export default ProfileLoading;
