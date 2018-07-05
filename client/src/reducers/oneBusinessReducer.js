import { ONE_BUSINESS } from '../actions/types';

/**
   * @param {object} state
   * @param {object} action
   * @return {object} state
   */
export default function business(state = {}, action = {}) {
  switch (action.type) {
    case ONE_BUSINESS:
      return action.oneBusiness;

    default:
      return state;
  }
}
