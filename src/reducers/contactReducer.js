import {
   FORM_SUBMITED
  } from './types';
  
  const initialState = {
   contactValidation:"",
  };


  export default function (state = initialState, action) {
    switch (action.type) {
      case FORM_SUBMITED:
        return {
          ...state,
          contactValidation: action.payload,
        };
      
      default:
        return state;
    }
  }
  