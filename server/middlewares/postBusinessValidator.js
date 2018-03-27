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
    !req.body.title.trim() ||
    !req.body.description.trim() ||
    !req.body.category.trim() ||
    !req.body.location.trim() ||
    !req.body.image.trim() ||
    !req.body.email.trim()
  ) {
    res.status(400)
      .json({
        message: 'All or some of the field is/are undefined',
      });
  }
  if (!req.body.title.trim()) {
    return res.status(400).send({
      message: 'Title is required',
    });
  }
  if (!req.body.description.trim()) {
    return res.status(400).send({
      message: 'description is required',
    });
  }
  if (!req.body.category.trim()) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (!req.body.location.trim()) {
    return res.status(400).send({
      message: 'location is required',
    });
  }
  if (!req.body.category.trim()) {
    return res.status(400).send({
      message: 'category is required',
    });
  }
  if (!req.body.email.trim()) {
    return res.status(400).send({
      message: 'email is required',
    });
  }
  if (!req.body.image.trim()) {
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
  if (!validator.isLength(req.body.description.trim(), { min: 2, max: 300 })) {
    res.status(406)
      .send({
        status: 'Fail',
        message: 'description should be between 2 to 300 characters',
      });
  }
  next();
};
export default validateInput;

