import React from 'react';
import { motion } from 'framer-motion';

const SideDrawer = ({ children }) => {
  return (
    <motion.aside
      initial={{ x: '-300px', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: '-300px', opacity: 0 }}
      className='flex flex-col border-2 w-2/5 h-screen absolute bg-white top-0'
    >
      {children}
    </motion.aside>
  );
};

export default SideDrawer;
