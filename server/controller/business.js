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
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses.splice(i, 1);
        return res.status(200).json({
          message: 'business removed successfully',
        });
      }
    }
    return res.status(404).json({
      message: ' business not found',
    });
  }
  /**
   * @returns {obj} retrieveBusiness
   * @param {*} req
   * @param {*} res
   */
  static retrieveBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        return res.status(200).json({
          businesses: businesses[i],
          message: 'success',
        });
      }
    }
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
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.businessId, 10)) {
        businesses[i].name = req.body.name;
        businesses[i].description = req.body.description;
        businesses[i].image = req.body.image;
        businesses[i].category = req.body.category;
        businesses[i].location = req.body.location;
        businesses[i].email = req.body.email;
        return res.status(200).json({
          businesses,
          message: 'business updated successfully',
        });
      }
    }
    return res.status(404).json({
      message: 'sorry,business not found',
    });
  }
}

export default Businesses;
