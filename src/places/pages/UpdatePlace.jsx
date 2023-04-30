import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';

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

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    true
  );
  const place = DUMMY_PLACES.find((p) => p.id === placeId);
  useEffect(() => {
    if (place) {
      setFormData(
        {
          title: {
            value: place.title,
            isValid: true,
          },
          description: {
            value: place.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, place]);

  const thingUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  if (!place) {
    return (
      <div className='mt-36 flex justify-center'>
        <Card classes='shadow-md shadow-black rounded-md  flex flex-col gap-4 bg-white text-2xl font-semibold w-5/12 pl-4 py-8'>
          Could not find place
        </Card>
      </div>
    );
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <form
      className='pt-8 mt-28 rounded-sm p-8  bg-white w-7/12 mx-auto '
      onSubmit={thingUpdateSubmitHandler}
    >
      <Input
        id='title'
        type='text'
        element='input'
        label='Title'
        onChange={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid Title!'
        classes='flex flex-col'
        errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
        invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm'
        labelClasses='pl-4 pb-2 text-xl font-bold'
        inputClasses='bg-gray-200 pl-4 rounded-md ml-4 py-2 mr-4'
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        onChange={inputHandler}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid Description!'
        classes='flex flex-col'
        errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
        invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm'
        labelClasses='pl-4 pb-2 text-xl font-bold'
        inputClasses='bg-gray-200 pl-4 rounded-md ml-4 py-2 mr-4'
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button
        type='submit'
        disabled={!formState.isValid}
        classes='bg-red-500 font-semibold py-3 px-6 rounded-md mt-4 ml-4'
        disabledClasses='bg-gray-300 text-gray-100 font-semibold py-3 px-6 rounded-md mt-4 ml-4'
      >
        Update Thing
      </Button>
    </form>
  );
};

export default UpdatePlace;
