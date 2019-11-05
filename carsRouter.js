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

router.post('/', async (req, res) => {
    try {
        const newCar = await db('cars').insert(req.body);
        res.json("New car successfully added");
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;