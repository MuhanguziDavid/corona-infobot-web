import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import treesReducer from './treesReducer';

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
  treesReducer,
});

export default rootReducer;

