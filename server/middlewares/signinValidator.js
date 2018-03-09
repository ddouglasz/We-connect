
/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserSignIn = (req, res, next) => {
  if (req.body.password === undefined || req.body.username === undefined) {
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
  if (!req.body.password) {
    return res.status(400).send({
      message: 'Password is required',
    });
  }
  next();
};
export default validateUserSignIn;
