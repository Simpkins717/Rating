import React, { useState, useEffect } from 'react';
import MainHeader from './MainHeader';
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import useWindowDimensions from '../../utils/WindowDimensions';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import { AnimatePresence, motion } from 'framer-motion';

const MainNavigation = () => {
  const { height, width } = useWindowDimensions();
  const [widthCheck, setWidthCheck] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (width >= 992) {
      setWidthCheck(true);
    } else if (width < 992) {
      setWidthCheck(false);
    }
  }, [width]);
  return (
    <>
      {widthCheck ? (
        <MainHeader>
          <button>
            <span />
            <span />
            <span />
          </button>
          <div className='flex justify-between '>
            <Link to='/'>
              <h1 className='-pt-2 pl-4 text-2xl'>Your Things</h1>
            </Link>
            <nav className='pr-4'>
              <NavLinks />
            </nav>
          </div>
        </MainHeader>
      ) : (
        <>
          <MainHeader>
            <RxHamburgerMenu
              className='h-10 w-10'
              onClick={() => setShowDrawer(!showDrawer)}
            />
            <button>
              <span />
              <span />
              <span />
            </button>
            <div className='flex justify-between '>
              <Link to='/'>
                <h1 className='-pt-2 pl-4 text-2xl'>Your Things</h1>
              </Link>
            </div>
          </MainHeader>
          <AnimatePresence>
            {showDrawer && (
              <SideDrawer>
                <nav
                  onClick={() => setShowDrawer(!showDrawer)}
                  className='pr-4  '
                >
                  <NavLinks showDrawer={showDrawer} />
                </nav>
              </SideDrawer>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default MainNavigation;
