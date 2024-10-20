const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller')

router.post('/register', authController.signUp)

module.exports =router