import * as types from './types';

export const fetchTreesAction = (payload) => ({
  type: types.FETCH_TREES,
  payload
});

export const openTreeAction = (payload) => ({
  type: types.OPEN_TREE,
  payload
});