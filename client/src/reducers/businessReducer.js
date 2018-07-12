import { ALL_BUSINESSES, PAGINATION, ONE_BUSINESS, ALL_REVIEWS, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILED, DELETE_FAILED, DELETE_SUCCESSFUL } from '../actions/types';

const initialState = {
  businesses: [],
  pagination: {},
  oneBusiness: {},
  allReviews: [],
  isCreated: false,
  hasError: false,
  reviewAdded: '',
  error: ''
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

    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviewAdded: action.review
      };

    case ADD_REVIEW_FAILED:
      return {
        ...state,
        error: action.error
      };

    case DELETE_FAILED:
      return {
        ...state,
        error: action.error
      };

    case DELETE_SUCCESSFUL:
      return {
        ...state,
        message: action.message
      };

    default:
      return state;
  }
}
