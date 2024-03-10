
var db = require('../models/index')
var { sequelize } = require('../models/index')
const { Sequelize, Op } = require("sequelize");


let getAllHotels = async (req, res) => {
  try {
    console.log("api hitting");
    const { check_in_date, check_out_date } = req.query;

    let includeOptions = [];
    if (check_in_date && check_out_date) {
      includeOptions.push({
        model: db.booking,
        as: "Bookings",
        required: false, 
        where: { 
          status: "Booked",
          check_in_date: { [Op.lte]: check_out_date }, 
          check_out_date: { [Op.gte]: check_in_date } 
        }
      });
    }else{
      includeOptions.push({
        model: db.booking,
        as: "Bookings",
        required: false, 
        where: { 
          status: "Booked",
        }
      });

    }

    const hotels = await db.hotels.findAll({
      include: includeOptions
    });
    
    if (hotels.length > 0) {
      return res.status(200).send({ status: true, message: "Hotels Retrieved Successfully", hotels });
    } else {
      return res.status(200).send({ status: false, message: "No Hotels Available" ,hotels:[]});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


let createHotels = async function(req, res, next) {
    try {
      req.body.name = req.body.name.trim();
  
      let insertData = {
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        phone: req.body.phone,
        email: req.body.email,
        website: req.body.website,
        status :"Available"
      };
  
      const createdHotel = await db.hotels.create(insertData);
  
      if (createdHotel) {
        const responseData = {
          hotel_id: createdHotel.hotel_id,
          name: createdHotel.name,
          address: createdHotel.address,
          city: createdHotel.city,
          state: createdHotel.state,
          country: createdHotel.country,
          phone: createdHotel.phone,
          email: createdHotel.email,
          website: createdHotel.website
        };
  
      
        return res.status(200).send({ status: true, message: "New hotel inserted", data: responseData });
      } else {
        
        return res.status(500).send({ status: false, message: "Error in creating hotel" });
      }
    } catch (error) {
     
      console.error("Exception in inserting new hotel:", error);
      
      return res.status(500).send({ status: false, message: "Exception in inserting new hotel" });
    }
  };
  

module.exports = {
    getAllHotels,
    createHotels
}
