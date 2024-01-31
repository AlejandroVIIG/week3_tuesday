const catchError = require('../utils/catchError');
const Student = require('../models/Student');
const Degree = require('../models/Degree');
const Country = require('../models/Country');

const findAll = catchError(async(req, res) => {
    const students = await Student.findAll({include: [Degree, Country]});
    return res.json(students);
});

const create = catchError(async(req, res) => {
    const newStudent = await Student.create(req.body);
    return res.status(201).json(newStudent);
});

const findOne = catchError(async(req, res) => {
    const { id } = req.params;
    const student = await Student.findByPk(id, {include: [Degree, Country]});
    if(!student) return res.sendStatus(404);
    return res.json(student);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
     const student = await Student.findByPk(id);
     if(!student) return res.sendStatus(404);
    await student.destroy();
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if(!student) return res.sendStatus(404);
    const updatedStudent = await student.update(req.body);
    return res.json(updatedStudent);
});

module.exports = {
    findAll,
    create,
    findOne,
    remove,
    update
}