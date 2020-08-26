import { progressActionTypes } from '../actions/progressActions';

const progressReducer = (state = [], { type, payload }) => {
  switch (type) {
    case progressActionTypes.SAVE_PROGRESS:
      console.log(payload.progress);
      state = [...state, payload.progress];
      return state;
    default:
      return state;
  }
};

export default progressReducer;
