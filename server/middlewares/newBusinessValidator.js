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
  if (!req.body.reviewedBy) {
    return res.status(400).send({
      message: 'reviewer cannot be empty',
    });
  }
  if (!req.body.id) {
    return res.status(400).send({
      message: 'id cannot be empty',
    });
  }
  if (!req.body.description) {
    return res.status(400).send({
      message: 'description cannot be empty',
    });
  }
  if (!req.body.category) {
    return res.status(400).send({
      message: 'category cannot be empty',
    });
  }
  if (!req.body.location) {
    return res.status(400).send({
      message: 'location cannot be empty',
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: 'email cannot be empty',
    });
  }
  next();
};
export default validateInput;
