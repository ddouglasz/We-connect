import { combineReducers } from 'redux';
import allBusinesses from './businessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import editBusiness from './editBusinessReducer';
import imageReducer from './imageReducer';
import getUserProfile from './userProfileReducer';


export default combineReducers({
  flashMessages,
  allBusinesses,
  editBusiness,
  imageReducer,
  // addReview,
  getUserProfile,
  auth
});

