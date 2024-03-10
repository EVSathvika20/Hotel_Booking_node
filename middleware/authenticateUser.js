var jwt = require('jsonwebtoken');
var env = require('../config/environment');
var status = require('../config/apiStatus');
var db = require('../src/models/index');

let userAuth = async (req, res, next) => {
    console.log("coming here");
    console.log("req.headers.authorization",req.headers.authorization)
    if (req.headers.authorization !== undefined) {
        console.log("came");
        let jwttoken = req.headers.authorization.split(" ");
        console.log("jwttoken", jwttoken);
        if (typeof jwttoken[1] !== 'undefined') {
            jwt.verify(jwttoken[1], env.jwtkey.end_user_key, (err, user) => {
                req.user = user.userdata;
                next();
            });
        } else {
            console.error("Invalid token format");
            return res.status(401).send(status.tokenError); // Send 401 Unauthorized status
        }
    } else {
        console.error("Authorization header not found");
        return res.status(401).send(status.tokenError); // Send 401 Unauthorized status
    }
};


module.exports = { userAuth };
