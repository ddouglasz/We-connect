import validator from 'validator';

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
    if (
      !req.body.reviewedBy ||
      !req.body.review ||
      !req.body.id) {
      return res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    }
    // check for reviwedBy
    if (validator.isEmpty(req.body.reviewedBy)) {
      return res.status(400).json({
        message: 'Name of of reviewer is required',
      });
    } else if (!validator.isLength(req.body.reviewedBy, {
      min: 3,
      max: 30,
    })) {
      return res.status(400).json({
        message: 'Name of reviewer should be between 3 to 30 characters ',
      });
    }

    // check for reviews
    if (validator.isEmpty(req.body.review)) {
      return res.status(400).json({
        message: 'review can not be empty',
      });
    } else if (!validator.isLength(req.body.review, {
      min: 20,
      max: 300,
    })) {
      return res.status(400).json({
        message: 'review has to be between 20 to 300 characters',
      });
    }
    // check for id
    if (validator.isEmpty(req.body.id)) {
      return res.status(400).json({
        message: 'id can not be empty',
      });
    }
    next();
  }
}

export default ReviewsValidator;
