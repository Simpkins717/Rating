import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main className='bg-slate-100 h-screen -mt-6'>
        <Routes>
          <Route path='/' exact element={<Users />} />
          <Route path='/places/new' exact element={<NewPlace />} />
          <Route path='/:userId/places' exact element={<UserPlaces />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
