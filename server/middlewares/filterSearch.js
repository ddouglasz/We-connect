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
    const { category, location, title } = req.query;

    if (location || category || title) {
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
            },
            {
              title: {
                ilike: `%${title}`
              }
            }

          ]
        }
      })
        .then((businesses) => {
          if (!businesses.length) {
            return res.status(404).json({
              message: 'Business not found',
              error: true
            });
          }
          return res.status(200).json({
            message: 'We found some businesses with the category or location you entered',
            businesses,
            error: false
          });
        });
    } else if (!location || !category || !title) {
      return next();
    }
  }
}
export default FilterBusinessSearch;
