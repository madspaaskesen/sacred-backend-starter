const jwt = require('jsonwebtoken')

function generateToken(user) {
  return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

module.exports = { generateToken }
