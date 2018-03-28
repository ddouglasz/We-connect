import models from '../models/index';

const businessModel = models.businesses;


/**
 * @class Sort
 */
class FilterBusinessSearch {
/**
   * @returns {Object} filterBusinessSearch
    * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  static filterBusinessSearch(req, res, next) {
    const { category, location } = req.query;

    if (location || category) {
      businessModel.findAll({
        where: {
          $or: [
            {
              location: {
                ilike: `%${location}`
              }
            },
            {
              category: {
                ilike: `%${category}`
              }
            }
          ]
        }
      })
        .then((business) => {
          if (!business.length) {
            return res.status(404).json({
              message: 'Business not found',
              error: true
            });
          }
          return res.status(200).json({
            business,
            error: false
          });
        });
    } else if (!location || !category) {
      return next();
    }
  }
}
export default FilterBusinessSearch;
