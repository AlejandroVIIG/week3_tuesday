const { findAll, create, findOne, remove, update } = require('../controllers/student.controller');
const express = require('express');

const routerStudent = express.Router();

routerStudent.route('/')
    .get(findAll)
    .post(create);

routerStudent.route('/:id')
    .get(findOne)
    .delete(remove)
    .put(update);

module.exports = routerStudent;