const router = require('express').Router();
const authController = require('../controllers/authController')

//get routes
router.get('/', authController.getSignup);

//post routes
router.post('/', authController.postSignup );

module.exports = router
