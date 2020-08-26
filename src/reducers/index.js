import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pathReducer from './pathReducer';

export default combineReducers({
  auth: authReducer,
  chosenPath: pathReducer,
});
