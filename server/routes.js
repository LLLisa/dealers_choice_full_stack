const express = require('express');
const router = express.Router();
const path = require('path');
const { Bike, Manufacturer } = require('../db');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/babe', (req, res) => {
  res.send('hi babe');
});

//bike routes---------------------------------
router.get('/api/bikes', async (req, res, next) => {
  try {
    const bikes = await Bike.findAll();
    res.send(bikes);
  } catch (error) {
    next(error);
  }
});

router.post('/api/bikes', async (req, res, next) => {
  try {
    const newBike = await Bike.create(req.body);
    res.status(201).send(newBike);
  } catch (error) {
    next(error);
  }
});

router.delete('/api/bikes/:id', async (req, res, next) => {
  try {
    const bike = await Bike.findByPk(req.params.id);
    await bike.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

//manufacturer routes-------------------------
router.get('/api/manufacturers', async (req, res, next) => {
  try {
    const manufacturers = await Manufacturer.findAll();
    res.send(manufacturers);
  } catch (error) {
    next(error);
  }
});

router.post('/api/manufacturers', async (req, res, next) => {
  try {
    const newManufacturer = await Manufacturer.create(req.body);
    res.status(201).send(newManufacturer);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
