import { pathActionTypes } from '../actions/pathActions';

const pathReducer = (state = '', { type, payload }) => {
  switch (type) {
    case pathActionTypes.SET_PATH:
      return (state = payload.path);
    default:
      return state;
  }
};

export default pathReducer;
