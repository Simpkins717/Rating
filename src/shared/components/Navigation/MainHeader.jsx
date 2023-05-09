import React from 'react';

const MainHeader = ({ children }) => {
  return (
    <div className=' bg-indigo-400 text-gray-100 shadow-md shadow-orange-300 fixed w-full top-0 pb-6'>
      {children}
    </div>
  );
};

export default MainHeader;
