const express = require('express')
const {SignupController, LoginController, AutoLoginController, GetUserController} = require('../controllers/AuthControllers')
const router = express.Router()

router.post('/signup',SignupController)
router.post('/login',LoginController)
router.post('/autologin',AutoLoginController)
router.post('/getuser',GetUserController)

module.exports = router