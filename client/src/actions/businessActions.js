import axios from 'axios';


/**
 * Register a business
 * @param {*} businesses
 * @returns {object} action to be dispatched
 */
const RegBusAction = businesses => dispatch =>
  axios.post('api/v1/businesses', businesses)
    .then(response => response.data.message);

export default RegBusAction;
