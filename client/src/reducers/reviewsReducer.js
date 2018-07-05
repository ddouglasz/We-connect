import { ALL_REVIEWS } from '../actions/types';
/**
   * @param {array} state
   * @param {object} action
   * @return {array} state
   */
export default function reviews(state = [], action = {}) {
  switch (action.type) {
    case ALL_REVIEWS:
      return action.allReviews;

    default:
      return state;
  }
}
