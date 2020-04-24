import * as types from './types';

export const loginAction = (payload) => ({
  type: types.LOGIN_USER,
  payload
});

export const signupAction = (payload) => ({
  type: types.SIGN_UP_SUCCESS,
  payload
});
