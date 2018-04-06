import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models/index';
import config from '../../config';


// const saltRounds = 10;
const usersModel = models.users;
let password = '';
/**
 * @class User
 */
class Users {
/**
 * @returns {Object} signUp
 * @param {param} req
 * @param {param} res
 */
  static signUp(req, res) {
    usersModel.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if (user) {
        return res.status(409).send({
          message: 'Email Already Exists',
        });
      }
      usersModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hashPassword: bcrypt.hashSync(req.body.password, 10)
      })
        .then(res.status(201).send({
          message: 'Registration Successful',
        }))
        .catch(error => res.status(400).send(error));
    });
  }
  /**
   * @returns {Object} signIn
   * @param {param} req
   * @param {param} res
   */
  static signIn(req, res) {
    usersModel.findOne({
      where: {
        email: req.body.email.trim()
      }
    }).then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      password = bcrypt.compareSync(req.body.password, user.hashPassword);
      if (password) {
        res.status(200).json({
          message: 'signed in successfully',
          token: jwt.sign(
            {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }
            , process.env.secretKey,
            { expiresIn: 60 * 60 }
          ),
          email: user.email,
          id: user.id,
        });
      }
    })
      .catch(error => res.status(404).json(error));
  }
}
export default Users;

