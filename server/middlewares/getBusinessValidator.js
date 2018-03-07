/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateInput = (req, res, next) => {
  if (!req.params.businessId) {
    return res.status(404);
  }
  if ((!req.params.recipeId.match('\\d+'))) {
    return res.status(400).send({
      message: 'Invalid Request',
    });
  }
  next();
};
export default validateInput;

