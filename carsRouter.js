const express = require('express');
const db = require('./data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.json(err);
        })
})

router.get('/:id', async(req, res) => {
    try {
        const car = await db('cars').where({id: req.params.id});
        res.json(car)
    } catch (err) {
        res.json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const newCar = await db('cars').insert(req.body);
        res.json({message: "New car successfully added"});
    } catch (err) {
        res.json(err);
    }
})

router.put('/:id', async(req, res) => {
    try {
        const updatedCard = await db('cars').where({id: req.params.id}).update(req.body);
        res.json({message: "Car details updated"});
    } catch (err) {
        res.json(err);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const deletedCard = await db('cars').where({id: req.params.id}).del();
        res.json({ message: "Car deleted successfully"})
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;