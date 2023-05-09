import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/utils/validators.js';
import { useForm } from '../../shared/hooks/form-hook';
const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const thingSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form
      className='pt-8 mt-28 rounded-sm p-8  bg-white w-7/12 mx-auto shadow-md shadow-orange-200 '
      onSubmit={thingSubmitHandler}
    >
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        classes='flex flex-col mb-6'
        labelClasses='pl-4 pb-2 text-xl font-bold'
        inputClasses='bg-gray-200 pl-4  rounded-md ml-4 py-2 mr-4 w-99'
        errorText='Please enter a valid title'
        errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
        invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm mb-6'
        onChange={inputHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description!'
        classes='flex flex-col'
        errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
        invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm'
        labelClasses='pl-4 pb-2 text-xl font-bold'
        inputClasses='bg-gray-200 pl-4 rounded-md ml-4 py-2 mr-4'
        onChange={inputHandler}
      />
      <Input
        id='address'
        element='input'
        label='Address'
        validators={[VALIDATOR_REQUIRE]}
        errorText='Please enter a valid address!'
        classes='flex flex-col'
        errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
        invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm'
        labelClasses='pl-4 pb-2 text-xl font-bold'
        inputClasses='bg-gray-200 pl-4 rounded-md ml-4 py-2 mr-4'
        onChange={inputHandler}
      />
      <div className='flex justify-center'>
        <Button
          type='submit'
          disabled={!formState.isValid}
          classes='bg-orange-400 font-semibold py-3 px-6 rounded-md mt-4 ml-4'
          disabledClasses='bg-gray-300 text-gray-100 font-semibold py-3 px-6 rounded-md mt-4 ml-4'
        >
          Add Thing
        </Button>
      </div>
    </form>
  );
};

export default NewPlace;
