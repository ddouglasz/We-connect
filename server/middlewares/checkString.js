import validator from 'validator';
// export default Validator;

/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const checkString = (req, res, next) => {
    
   if (typeOf(req.body) !== string()){

   }
  next();
};
export default checkString;

