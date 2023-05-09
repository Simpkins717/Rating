import Modal from './Modal';

import React from 'react';

const ErrorBox = ({ error }) => {
  return (
    <div className='w-full bg-red-300 text-center font-semibold mb-4 py-2 rounded-md'>
      {error}
    </div>
  );
};

export default ErrorBox;
