import { ALL_BUSINESSES, PAGINATION, ONE_BUSINESS, ALL_REVIEWS } from '../actions/types';

const initialState = {
  businesses: [],
  pagination: {},
  oneBusiness: {},
  allReviews: [],
};
  /**
   * @param {object} state
   * @param {object} action
   * @return {object} state
   */
export default function businesses(state = initialState, action) {
  switch (action.type) {
    case ALL_BUSINESSES:
      return {
        ...state,
        businesses: action.businesses
      };

    case PAGINATION:
      return {
        ...state,
        pagination: action.pagination
      };

    case ONE_BUSINESS:
      return {
        ...state,
        oneBusiness: action.oneBusiness
      };

    case ALL_REVIEWS:
      return {
        ...state,
        allReviews: action.allReviews
      };
    default:
      return state;
  }
}
