import axios from 'axios';
import decode from 'jwt-decode';
import { CURRENT_USER } from './types';
import setAuth from '../helper/setAuth';

export const currentUser = user => ({
  type: CURRENT_USER,
  user,
  isAuthenticated: true
});

/**
 * Sign up
 * @param {Object} userProfile
 * @returns {object} action to be dispatched
 */
export const SignUpAction = userProfile => dispatch =>
  axios.post('api/v1/auth/signup', userProfile)
    .then((response) => {
      const { token } = response.data;
      setAuth(token);
      localStorage.setItem('userToken', token);
      const user = decode(token);
      dispatch(currentUser(user));
      return response.data.message;
    });
