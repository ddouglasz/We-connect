import isEmail from 'validator/lib/isEmail';
// import validator from 'validator';
/**
 * @returns {Object} validate Input
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const validateUserSignUp = (req, res, next) => {
  if (req.body.email.trim().length === 0) {
    return res.status(401).send({
      message: 'email can not be empty',
    });
  }
  if (req.body.firstName.trim().length === 0) {
    return res.status(401).send({
      message: 'firstname can not be empty',
    });
  }
  if (req.body.lastName.trim().length === 0) {
    return res.status(401).send({
      message: 'lastname can not be empty',
    });
  }
  if (!req.body.email.trim()) {
    return res.status(401).json({
      message: 'Email is required',
    });
  }
  if (!req.body.password.trim()) {
    return res.status(401).json({
      message: 'Password is required',
    });
  }
  if (!req.body.firstName.trim()) {
    return res.status(401).json({
      message: 'firstName is required',
    });
  }
  if (!req.body.lastName.trim()) {
    return res.status(401).json({
      message: 'lastName is required',
    });
  }
  if (!req.body.firstName.match('[a-zA-Z]+$')) {
    return res.status(401).json({
      message: 'Only alphabets allowed in first name',
    });
  }
  if (!req.body.lastName.match('[a-zA-Z]+$')) {
    return res.status(401).json({
      message: 'Only alphabets allowed in last name',
    });
  }
  if ((req.body.lastName).length > 20) {
    return res.status(400).json({
      message: 'please enter a lastName that is less than 20 characters'
    });
  }
  if ((req.body.firstName).length > 20) {
    return res.status(400).json({
      message: 'please enter a firstName that is less than 20 characters'
    });
  }
  if (!isEmail(req.body.email.trim())) {
    return res.status(401).json({
      message: 'invalid email format',
    });
  }
  return next();
};

export default validateUserSignUp;
