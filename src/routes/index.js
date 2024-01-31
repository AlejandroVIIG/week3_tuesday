const express = require('express');
const routerDegree = require('./degree.router');
const routerStudent = require('./student.router');
const routerCountry = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/degrees", routerDegree);
router.use("/students", routerStudent);
router.use("/countries", routerCountry);

module.exports = router;