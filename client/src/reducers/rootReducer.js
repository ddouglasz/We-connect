import { combineReducers } from 'redux';
import allBusinesses from  './businessReducer';

import flashMessages from './flashMessages';
import auth from './auth';


export default combineReducers({
  flashMessages,
  allBusinesses,
  auth
});

