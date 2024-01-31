const { findAll, create, findOne, remove, update } = require('../controllers/country.controller');
const express = require('express');

const routerCountry = express.Router();

routerCountry.route('/')
    .get(findAll)
    .post(create);

routerCountry.route('/:id')
    .get(findOne)
    .delete(remove)
    .put(update);

module.exports = routerCountry;