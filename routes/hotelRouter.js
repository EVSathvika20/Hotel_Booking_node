const express = require('express');
const hotelController = require('../src/controllers/hotelController');

const router = express.Router();

router.get('/gethotels', hotelController.getAllHotels);
router.post('/createhotels', hotelController.createHotels);


module.exports = router;
