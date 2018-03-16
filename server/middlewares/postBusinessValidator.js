// import validator from 'validator';

// /**
//  *
//  *
//  * @class Validator
//  */
// class Validator {
//   /**
//    *
//    *
//    * @param {any} req
//    * @param {any} res
//    * @param {any} next
//    * @returns {json} validate business registeration
//    */
//   static addBusinessValidator(req, res, next) {
//     const {
//       title,
//       description,
//       category,
//       location,
//       image,
//       email
//     } = req.body;
//     const errors = {};
//     if (title === undefined || description === undefined || category === undefined ||
//       location === undefined || image === undefined || email === undefined) {
//       res.status(400)
//         .json({
//           message: 'All or some of the field is/are undefined',
//         });
//     } else
//     if (validator.isEmpty(category)) {
//       errors.category = 'category can not be empty';
//     }
//     if (validator.isEmpty(location)) {
//       errors.location = 'location can not be empty';
//     }
//     if (validator.isEmpty(image)) {
//       errors.location = 'image can not be empty';
//     }
//     if (validator.isEmpty(email)) {
//       errors.location = 'email can not be empty';
//     }
//     // if (Object.keys(errors).length !== 0) {
//     //   return res.status(400)
//     //     .json(errors);
//     // }
//     next();
//   }
// }


// export default Validator;

/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateInput = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Title is required',
    });
  }
  if (!req.body.description) {
    return res.status(400).send({
      message: 'Ingredients is required',
    });
  }
  if (!req.body.category) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (!req.body.location) {
    return res.status(400).send({
      message: 'location is required',
    });
  }
  if (!req.body.category) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: 'email is required',
    });
  }
  if (!req.body.image) {
    return res.status(400).send({
      message: 'image is required',
    });
  }
  next();
};
export default validateInput;

