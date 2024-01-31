const { findAll, create, findOne, remove, update } = require('../controllers/degree.controller');
const express = require('express');

const routerDegree = express.Router();

routerDegree.route('/')
    .get(findAll)
    .post(create);

routerDegree.route('/:id')
    .get(findOne)
    .delete(remove)
    .put(update);

module.exports = routerDegree;