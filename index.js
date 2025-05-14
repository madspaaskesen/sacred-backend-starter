const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')
const authRoutes = require('./src/routes/auth')
const userRoutes = require('./src/routes/user')
const statusRoutes = require('./src/routes/status')
const { authenticateToken } = require('./src/middleware/auth')

dotenv.config()

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))
app.use(helmet())
app.use(express.json())

app.use('/status', statusRoutes)
app.use('/auth', authRoutes)
app.use('/user', authenticateToken, userRoutes)

const PORT = process.env.PORT || 8080
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Sacred backend running on port ${PORT}`)
  })
}

module.exports = app
