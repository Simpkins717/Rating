import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No Places Found. Create One!</h2>
          <Button
            classes='bg-red-500 font-semibold py-3 px-6 rounded-md mt-4 ml-4'
            disabledClasses='bg-gray-300 text-gray-100 font-semibold py-3 px-6 rounded-md mt-4 ml-4'
            to='/places/new'
          >
            Share Place
          </Button>
        </Card>
      </div>
    );
  }
  return (
    <ul>
      {items.map((place, i) => (
        <PlaceItem
          key={i}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
