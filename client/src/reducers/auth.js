import isEmpty from 'lodash/isEmpty';
import { CURRENT_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};
  /**
   * @param {object} state
   * @param {object} action
   * @return {object} object
   */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default: return state;
  }
};
