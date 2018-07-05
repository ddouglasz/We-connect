import { ALL_BUSINESSES } from '../actions/types';

const initialState = {
  businesses: [],
  pagination: {}
};
  /**
   * @param {object} state
   * @param {object} action
   * @return {object} state
   */
export default function businesses(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_BUSINESSES:
      return action.allBusinesses;
    default:
      return state;
  }
}
