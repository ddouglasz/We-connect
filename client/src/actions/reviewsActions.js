import axios from 'axios';
import { ALL_REVIEWS, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILED } from './types';

export function allReviews(reviews) {
  return {
    type: ALL_REVIEWS,
    allReviews: reviews
  };
}

export const getReviewsAction = id => dispatch =>
  axios.get(`http://localhost:8000/api/v1/businesses/${id}/reviews`)
    .then((response) => {
      dispatch(allReviews(response.data.reviews));
    });
