import { combineReducers } from 'redux';
import allBusinesses from  './businessReducer';
import oneBusiness from './oneBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import editBusiness from './editBusinessReducer';
import deleteBusiness from './deletBusinessReducer';


export default combineReducers({
  flashMessages,
  allBusinesses,
  oneBusiness,
  editBusiness,
  deleteBusiness,
  auth
});

