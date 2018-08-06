import axios from 'axios';
import { ALL_REVIEWS, ADD_REVIEW_SUCCESS } from './types';
/**
 * @param { Object } allReviews
 * @return { function } function
 *
*/
export function getAllReviews(allReviews) {
  return {
    type: ALL_REVIEWS,
    allReviews
  };
}

/**
 * @param { number } id
 * @return { function } function
 *
*/
export const getReviewsAction = id => dispatch =>
  axios.get(`/api/v1/businesses/${id}/reviews`)
    .then((response) => {
      dispatch(getAllReviews(response.data.businessdata));
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
/*
 * @param { Object } review
 * @param { number } id
 * @return { function } function
 *
*/
export const postReviewAction = (review, id) => dispatch =>
  axios.post(`/api/v1/businesses/${id}/reviews`, review)
    .then(() => {
      dispatch(addReviewSuccess('successfully added a review'));
    });
