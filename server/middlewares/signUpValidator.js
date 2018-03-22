// import isEmail from 'validator/lib/isEmail';
// import validator from 'validator';
/**
 * @returns {Object} validate Input
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const validateUserSignUp = (req, res, next) => {
  const {
    password,
    firstName,
    email,
    lastName,
  } = req.body;
  if (
    !password ||
    !firstName ||
    !lastName || !email
  ) {
    return res.status(400)
      .json({
        message: 'All or some of the field is/are undefined',
      });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: 'Email is required',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'Password is required',
    });
  }
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'firstName is required',
    });
  }
  if (!req.body.lastName) {
    return res.status(400).send({
      message: 'lastName is required',
    });
  }
  if (!req.body.firstName.match('[a-zA-Z]+$')) {
    return res.status(400).send({
      message: 'Only alphabets allowed in first name',
    });
  }
  if (!req.body.lastName.match('[a-zA-Z]+$')) {
    return res.status(400).send({
      message: 'Only alphabets allowed in last name',
    });
  }
  next();
};

export default validateUserSignUp;
