import validator from 'validator';

/**
 *
 *
 * @class Validator
 */
class ReviewsValidator {
  /**
     *
     *
     * @param {any} req
     * @param {any} res
     * @param {any} next
     * @returns {json} validate business registeration
     */
  static postReviewValidator(req, res, next) {
    const {
      id, reviewedBy, reviews
    } = req.body;
    const errors = {};
    if (id === undefined || reviewedBy === undefined || reviews === undefined
    ) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      // check for id
      if (!validator.isEmpty(reviewedBy)) {
        if (!validator.isLength(reviewedBy, { min: 3, max: 30 })) {
          errors.name = 'reviewers name should be between 3 to 50 characters';
        }
      } else {
        errors.name = 'Name of of reviewer is required';
      }

      // check for reviews
      if (!validator.isEmpty(reviews)) {
        if (!validator.isLength(reviews, { min: 20, max: 300 })) {
          errors.description = 'reviews of a business must be between 20 to 300 characters';
        }
      } else {
        errors.description = 'reviews can not be empty';
      }
      if (Object.keys(errors).length !== 0) {
        return res.status(400)
          .json(errors);
      } next();
    }
  }
}

export default ReviewsValidator;
