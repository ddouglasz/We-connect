/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateInput = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: 'business cannot be empty',
    });
  }
  next();
};

export default validateInput;
