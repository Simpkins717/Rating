import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils/validators.js';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};
const Input = ({
  inputClasses,
  labelClasses,
  classes,
  id,
  label,
  type,
  placeholder,
  rows,
  cols,
  element,
  invalidClasses,
  errorText,
  errorClasses,
  validators,
  onChange,
  initialValid,
  initialValue,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isValid: initialValid || false,
    isTouched: false,
  });
  const { value, isValid } = inputState;
  useEffect(() => {
    onChange(id, value, isValid);
  }, [id, value, isValid, onChange]);
  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: validators,
    });
  };
  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };
  const el =
    element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        cols={cols || 30}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
        className={inputClasses}
      />
    );

  return (
    <div
      className={
        (!inputState.isValid && inputState.isTouched && invalidClasses) ||
        classes
      }
    >
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {el}
      {!inputState.isValid && inputState.isTouched && (
        <p className={errorClasses}>{errorText}</p>
      )}
    </div>
  );
};

export default Input;
