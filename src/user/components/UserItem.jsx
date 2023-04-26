import React from 'react';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';

const UserItem = ({ image, name, id, placeCount }) => {
  return (
    <li className='mt-28  pt-4'>
      <div className='flex justify-center '>
        <Link to={`/${id}/places`}>
          <Card className='flex flex-wrap  w-64 rounded-md bg-black text-white hover:bg-cyan-500 hover:scale-110  shadow-md shadow-black '>
            <div className='flex p-2 gap-4 '>
              <Avatar
                image={image}
                alt={name}
                width='60px'
                className='rounded-full '
              />
              <div>
                <h2 className='  text-xl'>{name}</h2>
                <h3 className='font-semibold'>
                  {placeCount}
                  {placeCount === 1 ? 'Place' : 'Places'}
                </h3>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
