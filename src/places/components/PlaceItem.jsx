import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

const PlaceItem = ({
  id,
  image,
  title,
  description,
  address,
  creator,
  location,
}) => {
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  return (
    <>
      {showMap && (
        <Modal
          onCancel={closeMapHandler}
          show={showMap}
          setShowMap={setShowMap}
          header={address}
        />
      )}
      <li>
        <Card>
          <div>
            <img src={image} />
          </div>
          <div>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div>
            <Button onClick={openMapHandler}>View on Map</Button>
            <Button to={'/places/${id}'}>Edit</Button>
            <Button>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
