import validator from 'validator';

import models from '../models/index';

const BusinessModel = models.businesses;

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
    if (req.body.review === undefined ||
       req.body.title === undefined) {
      return res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    }
    // check for a business that does not exist
    for (let i = 0; i < BusinessModel.length; i += 1) {
      if (req.param.businessId === BusinessModel[i].businessId) {
        return res.status(400).json({
          message: 'business not found',
        });
      }
    }
    // check for reviwedBy
    if (validator.isEmpty(req.body.review)) {
      return res.status(400).json({
        message: 'Name of of reviewer is required',
      });
    }
    // check for reviews
    if (validator.isEmpty(req.body.title)) {
      return res.status(400).json({
        message: 'review can not be empty',
      });
    }
    next();
  }
}

export default ReviewsValidator;
