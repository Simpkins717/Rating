import React from 'react';

const MainHeader = ({ children }) => {
  return (
    <div className=' bg-gray-500 text-gray-50 shadow-md shadow-orange-400 fixed w-full top-0 pb-6'>
      {children}
    </div>
  );
};

export default MainHeader;
