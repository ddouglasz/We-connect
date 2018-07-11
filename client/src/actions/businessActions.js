import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
  ALL_BUSINESSES,
  ONE_BUSINESS,
  EDIT_SUCCESSFUL,
  EDIT_FAILED,
  DELETE_FAILED,
  DELETE_SUCCESSFUL,
  ADD_IMAGE_SUCCESSFUL,
  ADD_IMAGE_FAILED,
  GET_USER_PROFILE_SUCCESSFUL,
  GET_USER_PROFILE_FAILED,
  PAGINATION,
} from './types';


// export function paginateBusinessAction(paginate) {
//   return {
//     type: PAGINATION,
//     pagination
//   };
// }
/**
 * AllBusiness
 * @param {Object} businesses
 * @returns {object} object action to be dispatched
 */
export function allBusinesses(businesses) {
  return {
    type: ALL_BUSINESSES,
    businesses
  };
}
/**
 * AllBusiness
 * @param {Object} pagination
 * @returns {object} object action to be dispatched
 */
export function paginationInfo(pagination) {
  return {
    type: PAGINATION,
    pagination
  };
}


/**
 * oneBusiness
 * @param {Object} business
 * @returns {object} object action to be dispatched
 */
export function oneBusiness(business) {
  return {
    type: ONE_BUSINESS,
    oneBusiness: business
  };
}

/**
 * AllBusiness
 * @param {Object} business
 * @returns {object} object action to be dispatched
 */
export function editSuccessful(business) {
  return {
    type: EDIT_SUCCESSFUL,
    business
  };
}

/**
 * AllBusiness reducer
 * @param {Array} error
 * @returns {object} object action to be dispatched
 */
export function editFailed(error) {
  return {
    type: EDIT_FAILED,
    error
  };
}

/**
 * Register a business
 * @param {*} businesses
 * @param {*} dispatch
 * @returns {object} action to be dispatched
 */
export const registerBusinessAction = businesses => () =>
  axios.post('api/v1/businesses', businesses)
    .then(response => response.data.message);

/**
 * Register a business
 * @param {*} page
 * @returns {object} action to be dispatched
 */
export const getBusinessAction = page => dispatch =>
  axios.get(`api/v1/businesses?page=${page || 1}`)
    .then((response) => {
      dispatch(allBusinesses(response.data.businesses));
      dispatch(paginationInfo(response.data.pagination));
    });

/**
 * @description - returns search for business action
 * @param {Object} searchType - document/user count
 * @param {Object} keyValue - rows fetched with Sequelize findAndCountAll query
 * @param {object} business - gets all businesses
 * @returns {Array} response.
 */
export const getAllBusinessSearchAction = (searchType, keyValue) => dispatch =>
  axios.get(`api/v1/businesses?${searchType}=${keyValue}`)
    .then((response) => {
      dispatch(allBusinesses(response.data.businesses));
    });

export const getOneBusinessAction = id => dispatch =>
  axios.get(`http://localhost:8000/api/v1/businesses/${id}`)
    .then((response) => {
      dispatch(oneBusiness(response.data.business));
    });

export const editBusinessAction = business => dispatch =>
  axios.put(`http://localhost:8000/api/v1/businesses/${business.id}`, business)
    .then(() => {
      dispatch(editSuccessful('Sucessfully Updated'));
    })
    .catch(() => {
      dispatch(editFailed('Your business did not update'));
    });

  /**
 * @description - returns a success message for a successfully deleted business
 * @param {String} message - success message
 * @returns {String} message.
 */
export function deleteSuccessful(message) {
  return {
    type: DELETE_SUCCESSFUL,ete a business
 * @param {Object} error - error message
    message
  };
}
/**
 * @description - returns an error for an unsuccessful attempt to del
 * @returns {Object} error.
 */
export function deleteFailed(error) {
  return {
    type: DELETE_FAILED,
    error
  };
}
/**
 * @description - returns an error for an unsuccessful attempt to delete a business
 * @param {number} id - delete action with respect to the business id
  * @returns {Function} function.
 */
export const deleteBusinessAction = id => dispatch =>
  axios.delete(`http://localhost:8000/api/v1/businesses/${id}`)
    .then((response) => {
      dispatch(deleteSuccessful(response.data.message));
    })
    .catch((error) => {
      dispatch(deleteFailed(error.response.data.message));
    });

/**
 * @description - checks for successful image upload
 * @param {String} image - takes in an image string directory
  * @returns {Object} object.
 */
export function addImageSuccessful(image) {
  return {
    type: ADD_IMAGE_SUCCESSFUL,
    image
  };
}
/**
 * @description - checks for unsuccesful attempt to upload image
 * @param {Object} error
 * @returns {Object} object.
 */
export function addImageFailed(error) {
  return {
    type: ADD_IMAGE_FAILED,
    error
  };
}
/**
 * @description - checks for successful image upload to cloudinary
 * @param {Object} image - takes in an image object directory to manage on cloudinary
  * @returns {Object} object.
 */
export function saveImageCloudinary(image) {
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', 'cbv7b7lm');
  delete axios.defaults.headers.common.Authorization;
  return dispatch => axios.post('https://api.cloudinary.com/v1_1/douglas-weconnect/image/upload', data)
    .then((response) => {
      const token = localStorage.getItem('userToken');
      axios.defaults.headers.common.Authorization = token;
      dispatch(addImageSuccessful(response.data.secure_url));
    })
    .catch(() => {
      dispatch(addImageFailed('Sorry, your image didnt upload'));
    });
}

/**
 * @description - get user profile details action
 * @param {String} userProfile
  * @returns {Object} object.
 */
export function getUserProfileSuccessful(userProfile) {
  return {
    type: GET_USER_PROFILE_SUCCESSFUL,
    userProfile
  };
}
/**
 * @description - get user profile details action
 * @param {Object} error
  * @returns {Object} object.
 */
export function getUserProfileFailed(error) {
  return {
    type: GET_USER_PROFILE_FAILED,
    error
  };
}

/**
 * @description - get user profile details action
 * @param {function} dispatch
  * @returns {Object} object.
 */
export const UserDashBoardAction = () => (dispatch) => {
  const userId = jwt.decode(localStorage.getItem('userToken')).id;
  axios.get(`/api/v1/businesses/${userId}/userProfile`)
    .then((response) => {
      dispatch(getUserProfileSuccessful(response.data.userdata.Businesses));
    });
};
