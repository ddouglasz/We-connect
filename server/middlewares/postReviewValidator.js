import validator from 'validator';
import { isEmpty } from 'lodash';

// import models from '../models/index';

// const BusinessModel = models.businesses;

/**
 *
 *
 * @class Validator
 */
class ReviewsValidator {
  /**
   *
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {json} validate business registeration
   */
  static postReviewValidator(req, res, next) {
    // check for contibutor
    if (!validator.isLength(req.body.review, { min: 2, max: 100 })) {
      return res.status(406)
        .send({
          status: 'Fail',
          message: 'review content should have between 2 and 100 characters',
        });
    }
    next();
  }
  /**
   *
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {json} validate business registeration
   */
  // static reviewsRatingsValidator(req, res, next) {
  //   // check for ratings
  //   const { review, rating } = req.body;

  //   const error = {};
  //   if (!review || validator.isEmpty(review.trim() || '')) {
  //     error.review = 'Please add a review';
  //   }
  //   if (!rating) {
  //     error.rating = 'Please add a rating';
  //   }
  //   if (isEmpty(error)) return next();
  //   return res.status(400).json({
  //     message: error
  //   });
  // }
}

export default ReviewsValidator;
