import validator from 'validator';
// export default Validator;

/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const checkString = (req, res, next) => {
    for(let i =1; i< ; i++){
   if (typeOf(req.body[i]) !== string()){
return 'data is not in string format'
   }
}
  next();
};
export default checkString;

