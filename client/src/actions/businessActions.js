import axios from 'axios';
import {
  ALL_BUSINESSES,
  ONE_BUSINESS,
  EDIT_SUCCESSFUL,
  EDIT_FAILED,
  DELETE_FAILED,
  DELETE_SUCCESSFUL,
  ADD_IMAGE_SUCCESSFUL,
  ADD_IMAGE_FAILED
} from './types';


export function allBusinesses(businesses) {
  return {
    type: ALL_BUSINESSES,
    allBusinesses: businesses
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
export const getBusinessAction = businesses => dispatch =>
  axios.get('api/v1/businesses', businesses)
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
