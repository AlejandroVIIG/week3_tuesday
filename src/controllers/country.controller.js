const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const findAll = catchError(async(req, res) => {
    const country = await Country.findAll();
    return res.json(country);
});

const create = catchError(async(req, res) => {
    const newCountry = await Country.create(req.body);
    return res.status(201).json(newCountry);
});

const findOne = catchError(async(req, res) => {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    if(!country) return res.sendStatus(404);
    return res.json(country);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
     const country = await Country.findByPk(id);
     if(!country) return res.sendStatus(404);
    await country.destroy();
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    if(!country) return res.sendStatus(404);
    const updatedCountry = await country.update(req.body);
    return res.json(updatedCountry);
});

module.exports = {
    findAll,
    create,
    findOne,
    remove,
    update
}