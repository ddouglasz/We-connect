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
    const { id, reviewedBy, review } = req.body;
    const errors = {};
    if (id === undefined || reviewedBy === undefined || review === undefined
    ) {
      return res.status(400).json({
        message: 'All or some of the field is/are undefined',
      });
    }
    // check for reviwedBy
    if (validator.isEmpty(reviewedBy)) {
      errors.reviewedBy = 'Name of of reviewer is required';
    } else if (!validator.isLength(reviewedBy, { min: 3, max: 30 })) {
      errors.reviewedBy = 'reviewers name should be between 3 to 50 characters';
    }

    // check for reviews
    if (!validator.isEmpty(review)) {
      errors.description = 'reviews can not be empty';
    } else if (!validator.isLength(review, { min: 20, max: 300 })) {
      errors.description = 'reviews of a business must be between 20 to 300 characters';
    }
    // check for id
    if (validator.isEmpty(id)) {
      errors.id = 'id can not be empty';
    }
    if (Object.keys(errors).length !== 0) {
      return res.status(400)
        .json(errors);
    } next();
  }
}

export default ReviewsValidator;
