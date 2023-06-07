const express = require('express');
const router = express.Router();
const users = require('../controller/user_controller')

router.post('/signup', users.CreateUser);

router.post('/login', users.LoginUser);

module.exports = router;