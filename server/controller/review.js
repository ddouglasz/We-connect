import businesses from '../model/business';
import reviews from '../model/review';
import Businesses from '../controller/business';// eslint-disable-line no-unused-vars
/**
 * @class Reviews
 */
class Reviews {
  /**
     * @returns {Objects} postReview
     * @param {*} req
     * @param {*} res
     */
  static postReview(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        console.log(businesses[i]);
        reviews.push({
          id: reviews.length + 1,
          reviewedBy: req.body.reviewedBy,
          review: req.body.review,
        });
        return res.status(201).json({
          businesses: businesses[i],
          reviews,
          message: 'review successfully added'
        });
      }
    }
    return res.status(404).json({
      message: 'business not found',
    });
  }
  /**
   * @returns {Object} getReviews
   * @param {*} req
   * @param {*} res
   */
  static getReviews(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        return res.status(200).json({
          businesses: businesses[i],
          reviews
        });
      }
    }
    return res.status(404).json({
      message: 'business not found',
    });
  }
}

export default Reviews;
