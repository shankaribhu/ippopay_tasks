const express = require('express');
const router = express.Router();
const singup = require('./singup');

router.get('/', (req, res) => {
    res.render('index', {title: 'Express'});
})

router.use('/user', singup);

module.exports = router;