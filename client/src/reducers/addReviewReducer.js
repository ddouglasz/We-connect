import { ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILED } from '../actions/types';

const initialState = {
  isCreated: false,
  hasError: false,
  reviewAdded: '',
  error: ''
}

export default function addReview (state = initialState, action = {}) {
  switch (action.type) {
    case ADD_REVIEW_SUCCESS:
      return {
        isCreated: true,
        hasError: false,
        reviewAdded: action.review,
        error: ''
      };


    case ADD_REVIEW_FAILED:
      return {
        isCreated: false,
        hasError: true,
        reviewAdded: '',
        error: action.error
      };
    default: return state;
  }
};
