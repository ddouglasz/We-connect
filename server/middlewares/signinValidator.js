import isEmail from 'validator/lib/isEmail';
/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserSignIn = (req, res, next) => {
  if (!req.body.password || !req.body.email) {
    return res.status(401)
      .json({
        message: 'All or some of the field is/are undefined',
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
      message: 'Email Invalid',
    });
  }
  next();
};
export default validateUserSignIn;
