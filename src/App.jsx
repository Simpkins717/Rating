import React, { useState, useCallback } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context.js';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route path='/' exact element={<Users />} />
        <Route path='/places/new' exact element={<NewPlace />} />
        <Route path='/:userId/places' exact element={<UserPlaces />} />
        <Route path='/places/:placeId' exact element={<UpdatePlace />} />
        <Route path='/auth' exact element={<Auth />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path='/' exact element={<Users />} />
        <Route path='/:userId/places' exact element={<UserPlaces />} />
        <Route path='/auth' exact element={<Auth />} />
        <Route path='*' element={<Navigate to='/auth' replace={true} />} />
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div>
        <MainNavigation />
        <main className='bg-slate-300 min-h-screen pt-4 '>
          <Routes>{routes}</Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
};
export default App;
