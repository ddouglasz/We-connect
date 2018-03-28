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
  if (req.body.title.trim().length === 0) {
    return res.status(400).send({
      message: 'Title is required',
    });
  }
  if (req.body.description.trim().length === 0) {
    return res.status(400).send({
      message: 'description is required',
    });
  }
  if (req.body.category.trim().length === 0) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (req.body.location.trim().length === 0) {
    return res.status(400).send({
      message: 'location is required',
    });
  }
  if (req.body.category.trim().length === 0) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (req.body.email.trim().length === 0) {
    return res.status(401).send({
      message: 'email is required',
    });
  }
  if (req.body.image.trim().length === 0) {
    return res.status(400).send({
      message: 'image is required',
    });
  }
  if (!validator.isLength(req.body.title.trim(), { min: 3, max: 30 })) {
    return res.status(406)
      .send({
        status: 'Fail',
        message: 'Business title should be 3 to 30 characters',
      });
  }
  if (!validator.isLength(req.body.description.trim(), { min: 2, max: 50 })) {
    res.status(406)
      .send({
        status: 'Fail',
        message: 'description should be between 2 to 50 characters',
      });
  }
  next();
};
export default validateInput;

