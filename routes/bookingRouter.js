const express = require('express');
const bookingController = require('../src/controllers/bookingController');
const authenticateUser = require('../middleware/authenticateUser');

const router = express.Router();

router.get('/getbookings', bookingController.getAllBookings);
router.post('/createbooking',  bookingController.createBooking);
router.get('/getBookingByUser', bookingController.getBookingbyId)


module.exports = router;
