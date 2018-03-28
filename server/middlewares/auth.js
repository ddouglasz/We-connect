import jwt from 'jsonwebtoken';

import jwtSecret from '../../config';

const secret = jwtSecret.JWT_SECRET;
/**
   * @returns {Object} verifies token
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const confirmToken = (req, res, next) => {
  console.log('here')
  const token = req.headers.auth || req.headers['x-access-token'] || req.body.token;
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ error: 'Token expired. kindly start a new session' });
      }
      req.decoded = decoded;
      
      return next();
    });
  } else {
    return res.status(401).send({ error: 'Access Denied! kindly login' });
  }
};

export default confirmToken;
