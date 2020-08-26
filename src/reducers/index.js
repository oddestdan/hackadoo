import { combineReducers } from 'redux';
import pathReducer from './pathReducer';
import progressReducer from './progressReducer';

export default combineReducers({
  chosenPath: pathReducer,
  progress: progressReducer,
});
