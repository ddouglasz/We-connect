import isEmail from 'validator/lib/isEmail';
/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserSignUp = (req, res, next) => {
  const {
    password, fullname, email, userId, username,
  } = req.body;
  if (password === undefined || fullname === undefined
            || email === undefined || username === undefined || userId === undefined) {
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
  if (!isEmail(req.body.email)) {
    return res.status(400).send({
      message: 'Email Invalid',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'Password is required',
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: 'email is required',
    });
  }
  if (!req.body.username) {
    return res.status(400).send({
      message: 'username is required',
    });
  }
  if (!req.body.fullname) {
    return res.status(400).send({
      message: 'fullname is required',
    });
  }
  if (!req.body.userId) {
    return res.status(400).send({
      message: 'userId is required',
    });
  }
  next();
};

export default validateUserSignUp;
