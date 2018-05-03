import axios from 'axios';
/**
 * @description - set token to request headers
 *
 * @param {string} token - Default application state
 *
 * @returns {void} no return or void
 */
export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
      delete axios.defaults.headers.common.Authorization; // eslint-disable-line
  }
}
