import isEmail from 'validator/lib/isEmail';
import validator from 'validator';

/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserSignIn = (req, res, next) => {
  if (req.body.email.trim().length === 0) {
    return res.status(401).send({
      message: 'email can not be empty',
    });
  }
  if (!req.body.email.trim()) {
    return res.status(401).json({
      message: 'email can not be empty',
    });
  }
  if (!req.body.password) {
    return res.status(401).json({
      message: 'please enter a password ',
    });
  }
  if (!isEmail(req.body.email.trim())) {
    return res.status(401).json({
      message: 'invalid credentials',
    });
  }
  next();
};
export default validateUserSignIn;
