// simple no-op middleware placeholder for rateLimiter
function rateLimiter(req, res, next) {
  next()
}

module.exports = { rateLimiter };
