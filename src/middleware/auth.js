function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token || token === 'null') return res.sendStatus(401)

  // fake decode for demo
  try {
    req.user = { id: '1234', name: 'Test User' }
    next()
  } catch {
    return res.sendStatus(403)
  }
}

module.exports = { authenticateToken };
