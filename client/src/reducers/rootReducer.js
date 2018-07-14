import { combineReducers } from 'redux';
import auth from './auth';
import allBusinesses from './businessReducer';
import flashMessages from './flashMessages';
import imageReducer from './imageReducer';


export default combineReducers({
  flashMessages,
  allBusinesses,
  imageReducer,
  auth
});

