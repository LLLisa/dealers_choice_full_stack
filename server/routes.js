const express = require('express');
const router = express.Router();
const path = require('path');
const { Bike, Manufacturer } = require('../db');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/api/bikes', async (req, res, next) => {
  try {
    const bikes = await Bike.findAll();
    res.send(bikes);
  } catch (error) {
    next(error);
  }
});

router.get('/api/manufacturers', async (req, res, next) => {
  try {
    const bikes = await Manufacturer.findAll();
    res.send(bikes);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
