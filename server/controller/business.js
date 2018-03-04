import businesses from '../model/business';
/**
 * @class business
 */
class Businesses {
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
   * @returns {object} removeEcipes
   * @param {*} req
   * @param {*} res
   */
  static removeBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses.splice(i, 1);
        return res.json({
          message: 'business removed successfully',
          error: false
        });
      }
    }
    return res.status(404).json({
      message: 'recipe not found',
    });
  }
}

export default Businesses;
