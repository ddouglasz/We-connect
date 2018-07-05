import axios from 'axios';
import { ALL_REVIEWS, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILED } from './types';
/**
 * @param { Object } review
 * @return { function } function
 *
*/
export function allReviews(review) {
  return {
    type: ALL_REVIEWS,
    allReviews: review
  };
}

/**
 * @param { number } id
 * @return { function } function
 *
*/
export const getReviewsAction = id => dispatch =>
  axios.get(`http://localhost:8000/api/v1/businesses/${id}/reviews`)
    .then((response) => {
      dispatch(allReviews(response.data.businessdata));
    });
/**
 * @param { Object } review
 * @return { function } function
 *
*/
export function addReviewSuccess(review) {
  return {
    type: ADD_REVIEW_SUCCESS,
    review
  };
}
/**
 * @param { Object } error
 * @return { function } function
 *
*/
export function addReviewFailed(error) {
  return {
    type: ADD_REVIEW_FAILED,
    error
  };
}
/**
 * @param { Object } review
 * @param { number } id
 * @return { function } function
 *
*/
export const postReviewAction = (review, id) => dispatch =>
  axios.post(`http://localhost:8000/api/v1/businesses/${id}/reviews`, review)
    .then(() => {
      dispatch(addReviewSuccess('successfully added a review'));
    });
