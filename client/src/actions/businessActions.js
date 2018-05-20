import axios from 'axios';
import { ALL_BUSINESSES, ONE_BUSINESS, EDIT_SUCCESSFUL, EDIT_FAILED } from './types';


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
