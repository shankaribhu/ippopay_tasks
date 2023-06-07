const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const indexRoutes = require('./router/index');
const authCheck = require('./auth/auth');
require('./models')

app.use('/v1', authCheck, indexRoutes);

app.all('/auth', authCheck);

module.exports = app;