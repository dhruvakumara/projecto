const express = require('express');

const {loginUser,registerUser} = require('../Controllers/Auth')

const router = express.Router();

router.post('/signup',registerUser);

router.post('/login',loginUser)

module.exports = router