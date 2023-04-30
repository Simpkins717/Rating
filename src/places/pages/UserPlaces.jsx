import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State',
    description: 'One of the most famous buildings in the world',
    imageUrl:
      'https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building.jpg.optimal.jpg',
    address: '20 W 34th St, New Yorkn NY 10001',
    creator: 'u1',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
  {
    id: 'p2',
    title: 'Empire State',
    description: 'One of the most famous buildings in the world',
    imageUrl:
      'https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building.jpg.optimal.jpg',
    address: '20 W 34th St, New Yorkn NY 10001',
    creator: 'u2',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return (
    <div className=''>
      <PlaceList items={loadedPlaces} />
    </div>
  );
};

export default UserPlaces;
