const user = require('./user');
const express = require('express');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api/users', user);
}