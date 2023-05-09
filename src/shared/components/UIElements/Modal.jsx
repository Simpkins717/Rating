import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Modal = ({ setShowMap, header, children, headerClasses }) => {
  return (
    <>
      <div className='fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity'>
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -500,
              opacity: 0,
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
            className='-mt-48 flex min-h-screen items-end justify-center p-4 text-center sm:items-center sm:p-0'
          >
            <div className='mx-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
              <div className='bg-white px-4 pt-5 pb-4 sm:pb-24 '>
                <button onClick={() => setShowMap(false)}>
                  <FaTimes className='h-8 w-8' />
                </button>
                <header className={headerClasses}>{header}</header>
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      ) : ( ''
    </>
  );
};

export default Modal;
