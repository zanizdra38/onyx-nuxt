const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

const keys = require('../keys')

const User = require('../models/user.model')

/**
 *
 */
module.exports.login = async (req, res) => {
  console.log('controller login', req.body)
  const candidate = await User.findOne({login: req.body.login})
  if (candidate){
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)
    if(isPasswordCorrect){
      const token = jwt.sign({
        login: candidate.login,
        userId: candidate._id,
      }, keys.JWT, {expiresIn: 60*60})
      res.json({token})
    } else {
      res.status(404).json({message: 'User not found'})
    }
  } else {
    res.status(404).json({message: 'User not found'})
  }
}

/**
 *
 */
module.exports.createUser = (req, res) => {

}
