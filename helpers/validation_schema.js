const joi = require('@hapi/joi')

const authSchema = joi.object({
  email: joi.string().email().required().lowercase(),
  password: joi.string().required().min(6),
  passwordConfirm: joi.ref('password'),
})

module.exports = {
  authSchema,
}
