import axios from 'axios';
import { ALL_BUSINESSES, ONE_BUSINESS } from './types';


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
  }
}

/**
 * Register a business
 * @param {*} businesses
 * @returns {object} action to be dispatched
 */
export const RegisterBusinessAction = businesses => dispatch =>
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
