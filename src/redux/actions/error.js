import * as types from './types';

const errorAction = (payload) => ({
  type: types.ERROR_OCCURRED,
  payload
});

export default errorAction;
