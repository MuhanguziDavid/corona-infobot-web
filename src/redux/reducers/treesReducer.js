import * as types from '../actions/types'

const initialState = {
  retrievedTrees: {},
  currentTree: {},
  createdTree: {},
  deleteSuccessful: false,
  error: false,
};

const treesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TREES:
      return {
        ...state,
        retrievedTrees: action.payload,
      };
    case types.OPEN_TREE:
      return {
        ...state,
        retrievedTrees: action.payload,
        currentTree: action.payload,
      };
    case types.CREATE_TREE:
      return {
        ...state,
        retrievedTrees: action.payload,
        createdTree: action.payload,
      };
    case types.DELETE_ITEM:
      return {
        ...state,
        deleteSuccessful: action.payload,
      };
    case types.ERROR_OCCURRED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default treesReducer;