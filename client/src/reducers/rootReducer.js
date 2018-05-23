import { combineReducers } from 'redux';
import allBusinesses from  './businessReducer';
import oneBusiness from './oneBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import editBusiness from './editBusinessReducer';
import deleteBusiness from './deletBusinessReducer';
import imageReducer from './imageReducer';
import allReviews from './reviewsReducer';


export default combineReducers({
  flashMessages,
  allBusinesses,
  oneBusiness,
  editBusiness,
  deleteBusiness,
  imageReducer,
  allReviews,
  auth
});

