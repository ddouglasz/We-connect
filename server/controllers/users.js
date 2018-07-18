import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models/index';
import { request } from 'http';


const BusinessModel = models.businesses;
const UsersModel = models.users;

const saltRounds = 10;
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
    }).then((useremail) => {
      if (useremail) {
        return res.status(409).send({
          message: 'Email Already Exists',
        });
      }
      usersModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hashPassword: bcrypt.hashSync(req.body.password, saltRounds)
      }).then((user) => {
        const accessToken = jwt.sign(
          {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            bio: user.bio
          },
          process.env.secretKey,
          { expiresIn: '24h' },
        );
        return (res.status(201).send({
          id: user.id,
          message: 'Registration Successful',
          token: accessToken,
        }));
      })
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
        return res.status(200).json({
          id: user.id,
          message: 'signed in successfully',
          token: jwt.sign(
            {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            }
            , process.env.secretKey,
            { expiresIn: '24h' }
          ),
          email: user.email,
          id: user.id,
        });
      }
      return res.status(401).json({
        message: 'invalid credentials'
      });
    })
      .catch(error => res.status(500).json(error));
  }
  /**
   * @returns {Object} getUserProfile
   * @param {param} req
   * @param {param} res
   */
  static getUserProfile(req, res) {
    UsersModel
      .findOne({
        where: {
          id: req.params.userId
        }
      })
      .then((user) => {
        if (user) {
          return BusinessModel
            .findAll({
              where: {
                userId: req.params.userId
              }
            })
            .then((businesses) => {
              if (!businesses) {
                return res.status(404).json({
                  message: 'there is no business created by this user yet,'
                });
              }
              return res.status(200).json({
                status: 'success',
                userdata: {
                  createdBy: `${user.firstName} ${user.lastName}`,
                  email: user.email,
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  bio: user.bio,
                  Businesses: businesses
                }
              });
            });
        }
        return res.status(404).json({
          message: 'User not found'
        });
      });
  }
  /**
   * @returns {Object} updateUserProfile
   * @param {req} req
   * @param {res} res
   */
  static updateUserProfile(req, res) {
    return usersModel.findOne({
      where: {
        id: req.params.userId
      }
    })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            message: 'user not found'
          });
        }
        if (req.decoded.id !== user.id) {
          return res.status(403).json({
            message: ' You are not authorized to make changes to this user account'
          });
        }
        return user.update({
          firstName: req.body.firstName || user.firstName,
          lastName: req.body.lastName || user.lastName,
          bio: req.body.bio || user.bio
        })
          .then(() => res.status(200).json({
            message: 'User details updated successfully',
            firstName: user.firstName,
            lastName: user.lastName,
            bio: user.bio,
            token: jwt.sign(
              {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                bio: user.bio
              }
              , process.env.secretKey,
              { expiresIn: '24h' }
            ),
          }))
          .catch(error => res.status(500).json({
            message: `internal server error ${error.message}`
          }));
      })
      .catch(error => res.status(500).json({
        message: `internal server error ${error.message}`
      }));
  }
  /**
    * @returns {Object} deleteUserProfile
    * @param {req} req
    * @param {res} res
    */
  static deleteUserProfile(req, res) {
    usersModel.findOne({
      where: {
        id: req.params.userId
      }
    })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            message: 'user not found',
          });
        }
        if (req.decoded.id !== user.id) {
          return res.status(403).json({
            message: 'You are not authorized to make changes for this user'
          });
        }
        usersModel.destroy({
          where: {
            id: req.params.userId
          }
        })
          .then(() => res.status(200).json({
            message: 'User deleted successfully'
          }));
      })
      .catch((error) => {
        res.status(400).json({
          message: `bad request: ${error}`
        });
      });
  }
}
export default Users;

