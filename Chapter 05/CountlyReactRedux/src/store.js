import { createStore } from 'redux';

const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'ZERO':
      return {
        count: 0
      };
    default:
      return state;
  }
};

export default createStore(countReducer);
