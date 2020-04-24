import * as types from '../actions/types';


const initialState = {
  login_user: null,
  error: null
};

const loginReducer = (state=initialState, action) => {
  switch(action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        payload: action.payload
      };
    case types.ERROR_OCCURRED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}

export default loginReducer;
