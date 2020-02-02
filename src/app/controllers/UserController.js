const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  store (req, res) {
    const { filename: avatar } = req.file

    User.create({ ...req.body, avatar })

    return res.redirect('/')
  }
}

module.exports = new UserController()
