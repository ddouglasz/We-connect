import models from '../models/index';

const BusinessModel = models.businesses;
const ReviewsModel = models.reviews;


/**
 * @class business
 */
class Businesses {
/**
   * @returns {Object} business
   * @param {req} req
   * @param {res} res
   */
  static getBusinesses(req, res) {
    return BusinessModel.all()
      .then(business => res.status(200).json(business))
      .catch(() => res.status(404).json({
        message: 'business not found'
      }));
  }
  /**
   * @returns {Object} createBusiness
   * @param {req} req
   * @param {res} res
   */
  static createBusinesses(req, res) {
    return BusinessModel.findOne({
      where: {
        title: req.body.title
      }
    }).then((business) => {
      if (business) {
        return res.status(404).json({
          message: 'Business Already Exists',
        });
      }
      return BusinessModel.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        email: req.body.email,
        image: req.body.image,
        userId: req.decoded.id,
      })
        .then(theBusiness => res.status(201).json({
          message: 'Business added successfully.',
          business: theBusiness
        }))
        .catch(() => res.status(401).json({
          message: 'Unauthorized, please kindly login'
        }));
    });
  }
  /**
   * @returns {Object} retrieveBusiness
   * @param {req} req
   * @param {res} res
   */
  static retrieveBusiness(req, res) {
    return BusinessModel.findOne({
      where: {
        id: req.params.businessId
      }
    }).then((business) => {
      if (!business) {
        return res.status(404).json({
          message: 'Business Not Found',
        });
      }
      return res.status(200).json({
        message: 'success',
        business
      });
    })
      .catch(() => res.status(500).json({
        message: 'internal server error.',
      }));
  }
  /**
   * @returns {Object} updateBusiness
   * @param {req} req
   * @param {res} res
   */
  static updateBusiness(req, res) {
    return BusinessModel.findOne({
      where: {
        id: req.params.businessId
      }
    }).then((business) => {
      if (!business) {
        return res.status(404).json({
          message: 'business Not Found',
        });
      }
      if (req.decoded.id !== business.userId) {
        return res.status(403).json({
          message: 'You are not authorised to edit this business',
        });
      }
      return business.update({
        title: req.body.title || business.title,
        descriprion: req.body.descriprion || business.descriprion,
        category: req.body.category || business.category,
        location: req.body.location || business.location,
        image: req.body.image || business.image,
        email: req.body.email || business.email,
      })
        .then(() => res.status(200).json(business))
        .catch(() => res.status(500).json({
          message: 'internal server error'
        }));
    })
      .catch(() => res.status(500).json({
        message: 'internal server error'
      }));
  }
  /**
 * @returns {Object} deleteBusinesss
 * @param {req} req
 * @param {res} res
 */
  static deleteBusiness(req, res) {
    BusinessModel.findOne({
      where: {
        id: req.params.businessId
      }
    }).then((business) => {
      if (!business) {
        return res.status(404).json({
          message: 'business Not Found',
        });
      }
      if (req.decoded.id !== business.userId) {
        return res.status(403).json({
          message: 'You are not authorised to delete this business',
        });
      }
      BusinessModel.destroy({
        where: {
          id: req.params.businessId
        }
      }).then(() => res.status(200).json({
        message: 'business deleted successfully',
      }))
        .catch(() => res.status(400).json({
          message: 'bad request: sorry, server can not process your request'
        }));
    })
      .catch(() => res.status(400).json({
        message: 'bad request: sorry, server can not process your request'
      }));
  }

  /**
   * @returns {Object} postReview
   * @param {req} req
   * @param {res} res
   */
  static postReview(req, res) {
    ReviewsModel.create({
      review: req.body.review,
      businessId: req.params.businessId,
      userId: req.decoded.id
    })
      .then(() => {
        res.status(201).json({
          message: 'Review added successfully'
        });
      })
      .catch(() => res.status(404).json({
        message: 'sorry, the business you are trying to review does not exist'
      }));
  }
  /**
   * @returns {Object} getReviews
   * @param {req} req
   * @param {res} res
   */
  static getReviews(req, res) {
    BusinessModel
      .findOne({
        where: {
          id: req.params.businessId
        }
      })
      .then((business) => {
        if (business) {
          return ReviewsModel
            .findAll({
              where: {
                businessId: req.params.businessId
              }
            })
            .then((reviews) => {
              if (!reviews) {
                return res.status(404).json({
                  message: 'this business does not have any reviews yet,'
                });
              }
              return res.status(200).json({
                status: 'success',
                businessdata: {
                  id: business.id,
                  title: business.title,
                  Reviews: reviews
                }
              });
            });
        }
        return res.status(404).json({
          message: 'business not found'
        });
      });
  }
}

export default Businesses;
