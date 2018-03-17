import models from '../models/index';

const BusinessModel = models.businesses;
const ReviewsModel = models.reviews;


/**
 * @class Recipe
 */
class Businesses {
/**
   * @returns {Object} business
   * @param {req} req
   * @param {res} res
   */
  static getBusinesses(req, res) {
    return BusinessModel.all()
      .then(business => res.status(200).send(business))
      .catch(error => res.status(400).send(error));
  }
  /**
   * @returns {Object} createBusiness
   * @param {req} req
   * @param {res} res
   */
  static createBusinesses(req, res) {
    BusinessModel.findOne({
      where: {
        title: req.body.title
      }
    }).then((business) => {
      if (business) {
        return res.status(404).send({
          message: 'business Already Exists',
        });
      }
      BusinessModel.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        email: req.body.email,
        image: req.body.image,
        userId: req.decoded.id,
      })
        .then(busines => res.status(201).send(busines))
        .catch(error => res.status(400).send(error));
    });
  }
  /**
   * @returns {Object} retrieveBusiness
   * @param {req} req
   * @param {res} res
   */
  static retrieveBusiness(req, res) {
    BusinessModel.findOne({
      where: {
        id: req.params.businessId
      }
    }).then((business) => {
      if (!business) {
        return res.status(404).send({
          message: 'Business Not Found',
        });
      }
      return res.status(200).send(business);
    })
      .catch(error => res.status(404).send(error));
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
    })
      .then(() => {
        res.status(201).send({
          message: 'Review added successfully'
        });
      })
      .catch(() => res.status(400).send({
        message: 'sorry, the business you are trying to review does not exist'
      }));
  }
}

export default Businesses;
