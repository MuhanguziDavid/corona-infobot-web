import {
  SIGN_UP_SUCCESS,
  ERROR_OCCURRED,
} from '../actions/types';

const initialSate = {
  signupSuccess: {},
  error: false,
};

const signupReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signupSuccess: action.payload,
      };
    case ERROR_OCCURRED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default signupReducer;
