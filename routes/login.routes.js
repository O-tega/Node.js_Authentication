// create router
const router = require('express').Router();

//import controller
const authController = require('../controllers/authController')
// import path
const path = require('path')

// Get routes
router.get('/', authController.getlogin);

// Post routes
router.post('/', authController.postlogin);

module.exports = router
