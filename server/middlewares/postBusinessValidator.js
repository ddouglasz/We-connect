import validator from 'validator';

/**
 *
 *
 * @class Validator
 */
class Validator {
  /**
   *
   *
   * @param {any} req
   * @param {any} res
   * @param {any} next
   * @returns {json} validate business registeration
   */
  static addBusinessValidator(req, res, next) {
    const {
      name,
      description,
      category,
      location,
      image,
      email
    } = req.body;
    const errors = {};
    if (name === undefined || description === undefined || category === undefined ||
      location === undefined || image === undefined || email === undefined) {
      res.status(400)
        .json({
          message: 'All or some of the field is/are undefined',
        });
    } else {
      if (!validator.isEmpty(name)) {
        if (!validator.isLength(name, {
          min: 3,
          max: 50
        })) {
          errors.name = 'Name of business must between 3 to 50 characters';
        }
      } else {
        errors.name = 'Name of business is required';
      }
      if (!validator.isEmpty(description)) {
        if (!validator.isLength(description, {
          min: 10,
          max: 300
        })) {
          errors.description = 'description of business must between 20 to 500 characters';
        }
      } else {
        errors.description = 'description of business is required';
      }
      if (validator.isEmpty(category)) {
        errors.category = 'category can not be empty';
      }
      if (validator.isEmpty(location)) {
        errors.location = 'location can not be empty';
      }
      if (validator.isEmpty(image)) {
        errors.location = 'image can not be empty';
      }
      if (validator.isEmpty(email)) {
        errors.location = 'email can not be empty';
      }
      if (Object.keys(errors).length !== 0) {
        return res.status(400)
          .json(errors);
      }
      next();
    }
  }
}

export default Validator;
