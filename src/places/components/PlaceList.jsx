import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No Places Found. Create One!</h2>
          <button>Share Place</button>
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
