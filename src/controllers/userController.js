
var db = require('../models/index')
var jwt = require('jsonwebtoken')
var env = require('../../config/environment');
var { sequelize } = require('../models/index')
const { Sequelize, Op } = require("sequelize");


const createUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password, mobile_number } = req.body;

        const newUser = await db.users.create({
            first_name,
            last_name,
            email,
            password,
            mobile_number,
            status :"ACTIVE"
        });
        if (newUser) {
            return res.status(201).json({ success: true, message: "User created successfully"});
        } else {
            return res.status(500).json({ success: false, message: "Error in creating user" });
        }
    } catch (error) {
      console.error("Error creating user:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

let userlogin = async function(req, res, next) {
    try {
        let userdata = await db.users.findOne({
            attributes: ["user_id", "first_name", "last_name", "email", "password","status"],
            where: { email: req.body.email },
        });
        console.log('userdatauserdata', userdata)
        if (userdata != null) {
            if (userdata.dataValues.status === "ACTIVE") {
                if(req.body.password === userdata.dataValues.password) {
                    return res.status(200).json({ message: "User loggedin", data:userdata.dataValues });
                } else {
                    return res.status(500).json({ success: false, message: "Authentication failed" });    
                }
            } else {
                return res.status(500).json({ success: false, message: "User is inactive" });
            }
        } else {
            return res.status(500).json({ success: false, message: "Email does not exist in the database" });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Exception in user login" });
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await db.users.findAll();
        if (users && users.length > 0) {
            return res.status(200).json({ success: true, message: "Users retrieved successfully", users });
        } else {
            return res.status(404).json({ success: false, message: "No users available" });
        }
    } catch (error) {
        console.error("Error retrieving users:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    userlogin
};