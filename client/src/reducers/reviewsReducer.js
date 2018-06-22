import { ALL_REVIEWS } from '../actions/types';
// import { allReviews } from '../actions/reviewsActions';

export default function reviews(state = [], action = {}) {
  switch (action.type) {
    case ALL_REVIEWS:
      return action.allReviews;

    default:
      return state;
  }
}
