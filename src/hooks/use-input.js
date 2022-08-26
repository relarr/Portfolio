import { useReducer } from 'react';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        input: action.payload.update,
        inputIsValid: action.payload.validate(action.payload.update),
      };
    case 'INPUT_TOUCHED':
      return {
        ...state,
        inputTouched: true,
      };
    default:
      return state;
  }
};

const useInput = (validateInput) => {
  const [formState, formDispatch] = useReducer(formReducer, {
    input: '',
    inputTouched: false,
    inputIsValid: false,
  });

  const inputUpdateHandler = (event) => {
    formDispatch({
      type: 'UPDATE_INPUT',
      payload: { update: event.target.value, validate: validateInput },
    });
  };

  const inputBlurHandler = () => {
    formDispatch({ type: 'INPUT_TOUCHED' });
  };

  return {
    input: formState.input,
    isTouched: formState.inputTouched,
    isValid: formState.inputIsValid,
    inputUpdateHandler,
    inputBlurHandler,
  };
};

export default useInput;
