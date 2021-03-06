const router = require("express").Router();
const passport = require('passport');
// Imports all routes from 
const userController = require('./../../controllers/userController');
const authController = require('../../controllers/authController');

router.route('/register')
	.post(authController.registerUser);

router.route('/login')
	.post(authController.loginUser);

router.route('/logout')
	.get(authController.logoutUser);

router.route('/profile')
	.get(userController.getCurrentUser)


module.exports = router;