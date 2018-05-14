import axios from 'axios';
import { ALL_BUSINESSES } from './types';


export function allBusinesses(businesses) {
  return {
    type : ALL_BUSINESSES,
    allBusinesses: businesses
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
    .then(response => {
     dispatch(allBusinesses(response.data.businesses));
    });


// export default RegBusAction;
