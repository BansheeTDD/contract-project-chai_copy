const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const sessionConfig = require('./sessionsConfig')
const cors = require('cors')
const checkUser = require('../src/middlewares/get.user.js')
const checkAdminUser = require('../src/middlewares/get.admin_user.js')

const corsOptions = {
    origin: ['*'],
    credentials: true,
    optionsSuccessStatus: 200,
}

module.exports = function serverConfig(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('combined'));
    // app.use(express.static('public'));
    app.use(cookieParser());
    app.use(session(sessionConfig));
    app.use(checkUser);
    app.use(checkAdminUser);
    app.use(cors());
    app.use(cors(corsOptions));
}