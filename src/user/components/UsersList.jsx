import React from 'react';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
const UsersList = ({ items }) => {
  if (items.length === 0)
    return (
      <div className='text-center '>
        <Card>
          <h2>No Items</h2>
        </Card>
      </div>
    );
  return (
    <ul>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
