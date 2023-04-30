import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

const App = () => {
  return (
    <div>
      <MainNavigation />
      <main className='bg-slate-300 min-h-screen pt-4 '>
        <Routes>
          <Route path='/' exact element={<Users />} />
          <Route path='/places/new' exact element={<NewPlace />} />
          <Route path='/:userId/places' exact element={<UserPlaces />} />
          <Route path='/places/:placeId' exact element={<UpdatePlace />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
