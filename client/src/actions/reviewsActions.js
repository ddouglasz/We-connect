import axios from 'axios';
import { ALL_REVIEWS, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILED } from './types';
import ReviewsCard from '../components/businesses/ReviewsCards';

export function allReviews(review) {
  return {
    type: ALL_REVIEWS,
    allReviews: review
  };
}


export const getReviewsAction = id => dispatch =>
  axios.get(`http://localhost:8000/api/v1/businesses/${id}/reviews`)
    .then((response) => {
      dispatch(allReviews(response.data.businessdata));
    });

export function addReviewSuccess(review) {
  return {
    type: ADD_REVIEW_SUCCESS,
    review
  };
}

export function addReviewFailed(error) {
  return {
    type: ADD_REVIEW_FAILED,
    error
  };
}

export const postReviewAction = (review, id) => dispatch =>
  axios.post(`http://localhost:8000/api/v1/businesses/${id}/reviews`, review)
    .then(() => {
      dispatch(addReviewSuccess('successfully added a review'));
    });
