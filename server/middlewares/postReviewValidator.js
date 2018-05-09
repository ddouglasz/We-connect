import validator from 'validator';

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
    if (validator.isEmpty(req.body.review)) {
      return res.status(400).json({
        message: 'Name of of contributor is required',
      });
    }
    if (!validator.isLength(req.body.review, { min: 2, max: 100 })) {
      return res.status(406)
        .send({
          status: 'Fail',
          message: 'review content should have between 2 and 100 characters',
        });
    }
    // check for reviews
    if (validator.isEmpty(req.body.title)) {
      return res.status(400)
        .json({
          message: 'review title can not be empty',
        });
    }
    next();
  }
}

export default ReviewsValidator;
