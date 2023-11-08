import React from 'react';

function SearchBox() {
  return (
    <div className="relative mt-10 md:px-0 px-5 md:mt-[80px] ">
      <input
        type="text"
        className="w-full px-4 py-2 pl-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring focus:ring-primary-200"
        placeholder="Search..."
      />
      <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-full text-gray-600">
      
      </div>
    </div>
  );
}

export default SearchBox;
