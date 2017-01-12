import { LOAD_NEWS } from '../actions/actionTypes';

export default (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_NEWS:
      return action.payload.results || [];
    default:
      return state;
  }
};
