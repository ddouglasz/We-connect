import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
  ALL_BUSINESSES,
  PAGINATION,
  ONE_BUSINESS,
  EDIT_SUCCESSFUL,
  EDIT_FAILED,
  DELETE_FAILED,
  DELETE_SUCCESSFUL,
  ADD_IMAGE_SUCCESSFUL,
  ADD_IMAGE_FAILED,
  GET_USER_PROFILE_SUCCESSFUL,
  GET_USER_PROFILE_FAILED,
} from './types';


// export function paginateBusinessAction(paginate) {
//   return {
//     type: PAGINATION,
//     pagination
//   };
// }

export function allBusinesses(allBusinesses) {
  return {
    type: ALL_BUSINESSES,
    allBusinesses
  };
}

export function oneBusiness(business) {
  return {
    type: ONE_BUSINESS,
    oneBusiness: business
  };
}

export function editSuccessful(business) {
  return {
    type: EDIT_SUCCESSFUL,
    business
  };
}

export function editFailed(error) {
  return {
    type: EDIT_FAILED,
    error
  };
}

/**
 * Register a business
 * @param {*} businesses
 * @returns {object} action to be dispatched
 */
export const registerBusinessAction = businesses => dispatch =>
  axios.post('api/v1/businesses', businesses)
    .then(response => response.data.message);

/**
 * Register a business
 * @param {*} businesses
 * @returns {object} action to be dispatched
 */
export const getBusinessAction = page => dispatch =>
  axios.get(`api/v1/businesses?page=${page || 1}`)
    .then((response) => {
      dispatch(allBusinesses(response.data));
    });

/**
 * @description - returns pagination object
 * @param {number} count - document/user count
 * @param {object}  - rows fetched with Sequelize findAndCountAll query
 * @param {object} business - gets all businesses
 * @param {number} limit - limit
 * @param {number} offset - offset
 * @returns {void}
 */
export const getAllBusinessSearchAction = (searchType, keyValue) => dispatch =>
  axios.get(`api/v1/businesses?${searchType}=${keyValue}`)
    .then((response) => {
      dispatch(allBusinesses(response.data.business));
    });


export const getOneBusinessAction = id => dispatch =>
  axios.get(`http://localhost:8000/api/v1/businesses/${id}`)
    .then((response) => {
      dispatch(oneBusiness(response.data.business));
    });

export const editBusinessAction = business => dispatch =>
  axios.put(`http://localhost:8000/api/v1/businesses/${business.id}`, business)
    .then(() => {
      dispatch(editSuccessful(' Sucessfully Updated'));
    })
    .catch(() => {
      dispatch(editFailed('Your business did not update'));
    });

export function deleteSuccessful(message) {
  return {
    type: DELETE_SUCCESSFUL,
    message
  };
}

export function deleteFailed(error) {
  return {
    type: DELETE_FAILED,
    error
  };
}

export const deleteBusinessAction = id => dispatch =>
  axios.delete(`http://localhost:8000/api/v1/businesses/${id}`)
    .then((response) => {
      dispatch(deleteSuccessful(response.data.message));
    })
    .catch((error) => {
      dispatch(deleteFailed(error.response.data.message));
    });

export function addImageSuccessful(image) {
  return {
    type: ADD_IMAGE_SUCCESSFUL,
    image
  };
}

export function addImageFailed(error) {
  return {
    type: ADD_IMAGE_FAILED,
    error
  };
}

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


export function getUserProfileSuccessful(userProfile) {
  return {
    type: GET_USER_PROFILE_SUCCESSFUL,
    userProfile
  };
}

export function getUserProfileFailed(error) {
  return {
    type: GET_USER_PROFILE_FAILED,
    error
  };
}


export const UserDashBoardAction = () => (dispatch) => {
  const userId = jwt.decode(localStorage.getItem('userToken')).id;
  axios.get(`/api/v1/businesses/${userId}/userProfile`)
    .then((response) => {
      dispatch(getUserProfileSuccessful(response.data.userdata.Businesses));
    });
};
