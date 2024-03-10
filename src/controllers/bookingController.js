
var db = require('../models/index') 

var { sequelize } = require('../models/index')
const { Sequelize, Op } = require("sequelize");


const createBooking = async (req, res, next) => {
  try {
      let insertData = {
          hotel_id: req.body.hotel_id,
          user_id: req.body.user_id,
          check_in_date: req.body.check_in_date,
          check_out_date: req.body.check_out_date,
          num_guests: req.body.num_guests,
          total_amount: req.body.total_amount,
          status: 'Booked'
      };

      console.log(req.body)

      const newBooking = await db.booking.create(insertData);

      if (newBooking) {
          
          await db.hotels.update({ status: 'Booked' }, { where: { hotel_id: insertData.hotel_id } });

          const responseData = {
              booking_id: newBooking.booking_id,
              hotel_id: newBooking.hotel_id,
              user_id: newBooking.user_id,
              check_in_date: newBooking.check_in_date,
              check_out_date: newBooking.check_out_date,
              num_guests: newBooking.num_guests,
              total_amount: newBooking.total_amount
          };

          return res.status(200).json({ success: true, message: "Booking created successfully", booking: responseData });
      } else {
          return res.status(500).json({ success: false, message: "Error in creating booking" });
      }
  } catch (error) {
      console.error("Exception in inserting new booking:", error);
      return res.status(500).json({ success: false, message: "Exception in creating new booking" });
  }
};

const getAllBookings = async (req, res) => {
    try {
      console.log("API hitting");
      const bookings = await db.booking.findAll();
  
      if (bookings && bookings.length > 0) {
        return res.status(200).send({ status: true, message: "Bookings retrieved successfully", bookings });
      } else {
        return res.status(404).send({ status: false, message: "No bookings available", bookings });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };

  const getBookingbyId = async (req, res) => {
    try {
      console.log("API hitting");
      const bookings = await db.booking.findAll({
        where: {
          user_id: req.query.user_id
        },
        include: [{
          model: db.hotels,
          as: "hotels",
          required: false, 
          where: { 
            status: "Booked"
          }
        }]
      });
  
      if (bookings && bookings.length > 0) {
        return res.status(200).send({ status: true, message: "Bookings retrieved successfully", bookings });
      } else {
        return res.status(200).send({ status: false, message: "No bookings available", bookings });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {
    createBooking,
    getAllBookings,
    getBookingbyId

};
