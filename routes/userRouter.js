const express = require('express');
const userController = require('../src/controllers/userController');
const authenticateUser = require('../middleware/authenticateUser');

const router = express.Router();

router.get('/getusers', userController.getAllUsers);
router.post('/createuser', userController.createUser);
router.post('/login', userController.userlogin );


module.exports = router;
