import isEmail from 'validator/lib/isEmail';
/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserSignIn = (req, res, next) => {
  const {
    password, username,
  } = req.body;
  if (password === undefined || username === undefined) {
    return res.status(400)
      .json({
        message: 'All or some of the field is/are undefined',
      });
  }
  if (!req.body.username) {
    return res.status(400).send({
      message: 'username is required',
    });
  }
  if (!req.body.Password) {
    return res.status(400).send({
      message: 'Password is required',
    });
  }
  next();
};
export default validateUserSignIn;
