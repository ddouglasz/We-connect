import bcrypt from 'bcrypt';

import users from '../model/user';

const saltRounds = 10;
/**
 * class Users
 */
class Users {
  /**
   * @returns {Object} signUp
   * @param {*} req
   * @param {*} res
   */
  static signUp(req, res) {
    users.push({
      userId: users.length + 1,
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      hashPassword: bcrypt.hashSync(req.body.password, saltRounds)
    });
    return res.status(200).json({
      message: 'user succesfully created'
    });
  }
  /**
   * @returns {Object} signUp
   * @param {*} req
   * @param {*} res
   */
  static signIn(req, res) {
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].username === req.body.username && users[i].password === req.body.password) {
        return res.status(200).json({
          message: 'user succesfully signed in'
        });
      }
    }
    return res.status(401).send({
      message: 'username and/password is not correct'
    });
  }
}

export default Users;
