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
}

export default Users;
