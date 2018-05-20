import { combineReducers } from 'redux';
import allBusinesses from  './businessReducer';
import oneBusiness from './oneBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import editBusiness from './editBusinessReducer';


export default combineReducers({
  flashMessages,
  allBusinesses,
  oneBusiness,
  editBusiness,
  auth
});

