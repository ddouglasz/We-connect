import { combineReducers } from 'redux';
import allBusinesses from './businessReducer';
// import oneBusiness from './oneBusinessReducer';
import flashMessages from './flashMessages';
import auth from './auth';
import editBusiness from './editBusinessReducer';
// import deleteBusiness from './deletBusinessReducer';
import imageReducer from './imageReducer';
// import allReviews from './reviewsReducer';
import addReview from './addReviewReducer';
import getUserProfile from './userProfileReducer';


export default combineReducers({
  flashMessages,
  allBusinesses,
  editBusiness,
  imageReducer,
  addReview,
  getUserProfile,
  auth
});

