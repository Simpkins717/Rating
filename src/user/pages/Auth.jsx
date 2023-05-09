import React, { useState, useContext } from 'react';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MIN,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import { AuthContext } from '../../shared/context/auth-context';
import Loading from '../../shared/components/UIElements/Loading';
import ErrorBox from '../../shared/components/UIElements/ErrorBox';
import axios from 'axios';
const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: '',
        isValid: true,
      },
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    true
  );
  const thingSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post(
          'http://localhost:5002/api/users/signup',
          {
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }
        );

        console.log(response.data);
        setIsLoading(false);
        auth.login();
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setError(err.message || 'Something went wrong!');
      }
    }
  };

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        { ...formState, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <form
      className='pt-8 mt-28 rounded-md shadow-sm shadow-black p-12  bg-white w-6/12 mx-auto '
      onSubmit={thingSubmitHandler}
    >
      {isLoading && <Loading />}
      {error && <ErrorBox error={error} />}

      <h2 className='text-center text-3xl font-bold text-indigo-400'>
        {isLogin ? 'Login Required!' : 'Register Now!'}
      </h2>
      {!isLogin ? (
        <Input
          onChange={inputHandler}
          id='name'
          type='text'
          element='input'
          label='Name'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Please enter a valid Username'
          classes='flex flex-col'
          errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
          invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm'
          labelClasses='pl-4 pb-2 text-xl font-bold'
          inputClasses='bg-gray-200 pl-4 rounded-md ml-4 py-2 mr-4 mb-4'
        />
      ) : (
        ''
      )}
      <Input
        onChange={inputHandler}
        id='email'
        type='text'
        element='input'
        label='Email'
        validators={[VALIDATOR_EMAIL()]}
        errorText='Please enter a valid Email'
        classes='flex flex-col'
        errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
        invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm'
        labelClasses='pl-4 pb-2 text-xl font-bold'
        inputClasses='bg-gray-200 pl-4 rounded-md ml-4 py-2 mr-4 mb-4'
      />
      <Input
        onChange={inputHandler}
        id='password'
        type='password'
        element='input'
        label='Password'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid Password'
        classes='flex flex-col'
        errorClasses='pl-4 text-center pb-4 pt-2 text-xl font-semibold'
        invalidClasses='text-red-500 flex flex-col shadow-red-500 shadow-sm'
        labelClasses='pl-4 pb-2 text-xl font-bold'
        inputClasses='bg-gray-200 pl-4 rounded-md ml-4 py-2 mr-4'
      />
      <div className='flex justify-center mt-6'>
        <Button
          classes='mr-4 bg-orange-400 py-3 px-6 rounded-md font-semibold'
          disabledClasses='bg-gray-300 text-gray-100 font-semibold py-3 px-6 rounded-md  mr-4'
          type='submit'
          disabled={!formState.isValid}
        >
          {isLogin ? 'Login' : 'SignUp'}
        </Button>
        <Button classes='border-2 border-orange-400 py-3 px-6 rounded-md'>
          {isLogin ? 'Not a Member?' : 'Already a Member?'}
          <span
            className='font-bold pl-2 text-indigo-600'
            onClick={switchModeHandler}
          >
            {isLogin ? 'Register' : 'Login'}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default Auth;
