const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = require('../../prisma/client')
const { generateToken } = require('../utils/jwt')

async function register(req, res) {
  const { name, email, password } = req.body
  try {
    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { name, email, password: hashed }
    })
    const token = generateToken(user)
    res.status(201).json({ user: { id: user.id, name: user.name }, token })
  } catch (err) {
    res.status(500).json({ error: 'Registration failed', detail: err.message })
  }
}

async function login(req, res) {
  const { email, password } = req.body
  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return res.status(404).json({ error: 'User not found' })

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

    const token = generateToken(user)
    res.json({ user: { id: user.id, name: user.name }, token })
  } catch (err) {
    res.status(500).json({ error: 'Login failed', detail: err.message })
  }
}

module.exports = { register, login }
