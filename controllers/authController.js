// import mongoose
const mongoose = require('mongoose')
// import model
const User = require('../models/User')
// import authschema
const { authSchema } = require('../helpers/validation_schema')
// import validationError
const ValidationError = require('../utilities/Validationerror')

// controller for signup page
exports.getSignup = async (req, res, next) => {
  try {
    res.status(200).render('create-account.ejs', {
      server_url: req.server_url,
    })
  } catch (error) {
    next('error: ', error)
  }
}

exports.postSignup = async (req, res, next) => {
  try {
    console.log('Body: ', req.body)
    const { email, password, passwordConfirm } = req.body
    const { error } = await authSchema.validateAsync(req.body)
    if (error) {
      return next(new ValidationError('wrong input'))
    }
    console.log('Result: ', result)
  } catch (error) {
    next(error)
  }
}

// controller for login page

exports.getlogin = async (req, res, next) => {
  try {
    console.log(req.body)
    res.render('login.ejs', {
      server_url: req.server_url,
      title: 'Login',
    })
  } catch (error) {
    next('Error: ', error)
  }
}

exports.postlogin = async (req, res, next) => {
  try {
    res.send(req.body)
  } catch (error) {
    next('Error: ', error)
  }
}
