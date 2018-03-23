import businesses from '../model/business';
/**
 * @class Business
 */
class Businesses {
  /**
   * @returns {Object} getBusinesses
   * @param {*} req
   * @param {*} res
   */
  static getBusinesses(req, res) {
    return res.status(200).json({
      businesses,
    });
  }
  /**
     * @returns {Objects} createBusinesses
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
      location: req.body.location,
      email: req.body.email,
    });
    return res.status(200).json({
      businesses,
      message: 'business successfully added',
    });
  }
  /**
   * @returns {object} removeBusinesses
   * @param {*} req
   * @param {*} res
   */
  static removeBusiness(req, res) {
    const { businessId } = req.params;

    businesses.forEach((bus, i) => {
      if (bus.id === parseInt(businessId, 10)) {
        businesses.splice(i, 1);
        return res.status(200).json({
          message: 'business removed successfully',
          error: false,
        });
      }
    });
    return res.status(404).json({
      message: 'Business not found',
      error: 'true',
    });
  }
  /**
   * @returns {obj} retrieveBusiness
   * @param {*} req
   * @param {*} res
   */
  static retrieveBusiness(req, res) {
    const { businessId } = req.params;
    businesses.forEach((business, i) => {
      if (business.id === parseInt(businessId, 10)) {
        return res.status(200).json({
          businesses: businesses[i],
          message: 'success',
        });
      }
    });
    return res.status(404).json({
      message: 'business not found',
    });
  }
  /**
   * @returns {Object} updateBusiness
   * @param {*} req
   * @param {*} res
   */
  static updateBusiness(req, res) {
    const {
      name,
      description,
      image,
      category,
      location,
      email
    } = req.body;

    const {
      businessId
    } = req.params;

    businesses.forEach((business) => {
      if (business.id === parseInt(businessId, 10)) {
        business.name = name;
        business.description = description;
        business.image = image;
        business.category = category;
        business.location = location;
        business.email = email;
        return res.status(200).json({
          business,
          message: 'business updated successfully',
        });
      }
    });
    return res.status(404).json({
      message: 'sorry,business not found',
    });
  }
}

export default Businesses;
