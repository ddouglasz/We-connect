import businesses from '../model/business';
/**
 * @class business
 */
class Businesses {
  /**
     * @returns {Objects} businesses
     * @param {*} req
     * @param {*} res
     */
  static createBusinesses(req, res) {
    businesses.push({
      id: businesses.length + 1,
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      category: req.body.category,
      quarters: req.body.quarters,
      email: req.body.email,
      reviews: req.body.reviews
    });
    return res.json({
      businesses,
      message: 'business successfully added'
    });
  }
  /**
   * @returns {Object} recipes
   * @param {*} req
   * @param {*} res
   */
  static getBusinesses(req, res) {
    return res.json({
      businesses
    });
  }
}
export default Businesses;

