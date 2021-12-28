import Joi from 'joi'

export const registerSchema = Joi.object({
  email: Joi.string().email().min(8).max(254).lowercase().trim().required(),
  username: Joi.string().min(5).max(15).lowercase().trim().required(),
  password: Joi.string().min(8).max(128).lowercase().trim().required(),
  color: Joi.string().min(5).max(15).lowercase().trim().required()
})
