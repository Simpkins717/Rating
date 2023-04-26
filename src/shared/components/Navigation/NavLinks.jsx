import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useWindowDimensions from '../../utils/WindowDimensions';

const NavLinks = ({ showDrawer }) => {
  const { height, width } = useWindowDimensions();
  const [widthCheck, setWidthCheck] = useState(true);
  const [closeSide, setCloseSide] = useState(showDrawer);
  useEffect(() => {
    if (width >= 992) {
      setWidthCheck(true);
    } else if (width < 992) {
      setWidthCheck(false);
    }
  }, [width]);
  return (
    <ul
      className={
        widthCheck ? 'gap-4 mr-4 flex flex-row' : 'gap-4 mr-4 flex flex-col'
      }
    >
      <li className='hover:bg-orange-300 hover:text-black p-2 rounded-md '>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-bold border-b-2' : '')}
          to='/'
        >
          All Users
        </NavLink>
      </li>
      <li className='hover:bg-orange-300 hover:text-black p-2 rounded-md'>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-bold border-b-2' : '')}
          to='/u1/places'
        >
          My Things
        </NavLink>
      </li>
      <li className='hover:bg-orange-300 hover:text-black p-2 rounded-md'>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-bold border-b-2' : '')}
          to='/places/new'
        >
          Add Things
        </NavLink>
      </li>
      <li className='hover:bg-orange-300 hover:text-black p-2 rounded-md'>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-bold border-b-2' : '')}
          to='/auth'
        >
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
