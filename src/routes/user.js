const express = require('express')
const { updateUser } = require('../controllers/userController')
const router = express.Router()

router.patch('/:id', updateUser)

module.exports = router
