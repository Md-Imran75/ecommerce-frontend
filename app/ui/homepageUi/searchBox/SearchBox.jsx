import React from 'react';

function SearchBox() {
  return (
    <div className="  md:px-0 px-5  ">
      <input
        type="text"
        className="w-full px-1 py-1 md:py-2 bg-primary-500 pl-5 md:pl-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring focus:ring-primary-200  placeholder:text-neutral-500 " 
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
