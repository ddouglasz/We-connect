/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateInput = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).send({
      message: 'id cannot be empty',
    });
  }
  if (!req.body.reviewedBy) {
    return res.status(400).send({
      message: 'reviewer cannot be empty',
    });
  }
  if (!req.body.reviews) {
    return res.status(400).send({
      message: 'reviews cannot be empty',
    });
  }
  next();
};
export default validateInput;

