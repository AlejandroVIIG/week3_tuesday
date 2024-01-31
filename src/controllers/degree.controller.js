const catchError = require('../utils/catchError');
const Degree = require('../models/Degree');

const findAll = catchError(async(req, res) => {
    const degree = await Degree.findAll();
    return res.json(degree);
});

const create = catchError(async(req, res) => {
    const newDegree = await Degree.create(req.body);
    return res.status(201).json(newDegree);
});

const findOne = catchError(async(req, res) => {
    const { id } = req.params;
    const degree = await Degree.findByPk(id);
    if(!degree) return res.sendStatus(404);
    return res.json(degree);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
     const degree = await Degree.findByPk(id);
     if(!degree) return res.sendStatus(404);
    await degree.destroy();
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const degree = await Degree.findByPk(id);
    if(!degree) return res.sendStatus(404);
    const updatedDegree = await degree.update(req.body);
    return res.json(updatedDegree);
});

module.exports = {
    findAll,
    create,
    findOne,
    remove,
    update
}