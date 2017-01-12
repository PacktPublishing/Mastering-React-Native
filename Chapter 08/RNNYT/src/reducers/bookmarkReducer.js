import { BOOKMARK, LOADED_BOOKMARKS } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOADED_BOOKMARKS:
      return action.payload;
    case BOOKMARK:
      return [...state, action.payload];
    default:
      return state;
  }
};
