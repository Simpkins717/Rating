import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
const PlaceItem = ({
  id,
  image,
  title,
  description,
  address,
  creator,
  coordinates,
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
        >
          <div className='w-screen h-80'>
            <Map center={coordinates} zoom={16} />
          </div>
        </Modal>
      )}
      <li className='flex justify-center'>
        <Card classes='shadow-md shadow-black rounded-md mt-32 flex flex-col gap-4 bg-white pb-4'>
          <div>
            <img className='h-96 w-full ' src={image} />
          </div>
          <div className='text-center'>
            <h2 className='font-bold pb-2'>{title}</h2>
            <h3 className='font-bold pb-2'>{address}</h3>
            <p className='border-b-2 pb-4'>{description}</p>
          </div>
          <div className='flex justify-center gap-6 pt-2 font-semibold'>
            <Button
              classes='border-2 border-orange-400 rounded-md px-6 py-3'
              onClick={openMapHandler}
            >
              View on Map
            </Button>
            <Button
              classes='bg-orange-200 px-6 py-3 rounded-md'
              to={`/places/${id}`}
            >
              Edit
            </Button>
            <Button classes='bg-orange-600 text-white px-6 py-3 rounded-md'>
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
