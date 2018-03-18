import isEmail from 'validator/lib/isEmail';
/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserSignIn = (req, res, next) => {
  if (req.body.password === undefined || req.body.email === undefined) {
    return res.status(400)
      .json({
        message: 'All or some of the field is/are undefined',
      });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: 'email is can not be empty',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'please enter a password ',
    });
  }
  if (!isEmail(req.body.email)) {
    return res.status(400).send({
      message: 'Email Invalid',
    });
  }
  next();
};
export default validateUserSignIn;
