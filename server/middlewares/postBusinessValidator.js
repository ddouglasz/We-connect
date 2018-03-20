import validator from 'validator';
// export default Validator;

/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateInput = (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.category ||
    !req.body.location ||
    !req.body.image ||
    !req.body.email 
  ) {
    res.status(400)
      .json({
        message: 'All or some of the field is/are undefined',
      });
  }
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Title is required',
    });
  }
  if (!req.body.description) {
    return res.status(400).send({
      message: 'description is required',
    });
  }
  if (!req.body.category) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (!req.body.location) {
    return res.status(400).send({
      message: 'location is required',
    });
  }
  if (!req.body.category) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: 'email is required',
    });
  }
  if (!req.body.image) {
    return res.status(400).send({
      message: 'image is required',
    });
  }
  if (!validator.isLength(req.body.title, { min: 3, max: 20 })) {
    return res.status(406)
      .send({
        status: 'Fail',
        message: 'Business name should be 3 to 30 characters',
      });
  }
  if (!validator.isLength(req.body.description, { min: 1, max: 300 })) {
    res.status(406)
      .send({
        status: 'Fail',
        message: 'description should be between 2 to 300 characters',
      });
  }
  next();
};
export default validateInput;

