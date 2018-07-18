import {
  ALL_BUSINESSES,
  PAGINATION, ONE_BUSINESS,
  ALL_REVIEWS, ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILED, DELETE_FAILED,
  DELETE_SUCCESSFUL, EDIT_SUCCESSFUL,
  EDIT_FAILED, GET_USER_PROFILE_SUCCESSFUL,
  GET_USER_PROFILE_FAILED,
  EDIT_USER_SUCCESSFUL,
  EDIT_USERFAILED
}
  from '../actions/types';

const initialState = {
  userProfile: {
    businesses: []
  },
  userEdited: false,
  businesses: [],
  business: {},
  pagination: {},
  oneBusiness: {},
  allReviews: [],
  isCreated: false,
  hasError: false,
  userFound: false,
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

    // case ADD_REVIEW_SUCCESS:
    //   return {
    //     ...state,
    //     allreviews: [action.review, ...state.allreviews]
    //   };
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

    case EDIT_SUCCESSFUL:
      return {
        ...state,
        business: action.business
      };

    case EDIT_FAILED:
      return {
        ...state,
        error: action.error
      };

    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        business: action.business
      };

    case EDIT_USERFAILED:
      return {
        ...state,
        error: action.error
      };

    case GET_USER_PROFILE_SUCCESSFUL:
      return {
        ...state,
        userProfile: action.userProfile,
      };

    case GET_USER_PROFILE_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
