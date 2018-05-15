import { combineReducers } from 'redux';
import allBusinesses from  './businessReducer';
import oneBusiness from './oneBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';


export default combineReducers({
  flashMessages,
  allBusinesses,
  oneBusiness,
  auth
});

