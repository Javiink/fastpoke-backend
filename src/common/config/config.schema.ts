import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  //APP
  NODE_ENV: Joi.string()
    .valid('development', 'staging', 'production')
    .default('development'),
  APP_PORT: Joi.number().default(3000),
  CORS_HOST: Joi.string().default(''),
  IMAGES_PATH: Joi.string().default('public/images'),
  //DATABASE
  MONGODB_PROTOCOL: Joi.string()
    .valid('mongodb', 'srv', 'mongodb+srv')
    .default('mongodb'),
  MONGODB_USERNAME: Joi.string().empty(''),
  MONGODB_PASSWORD: Joi.string().empty(''),
  MONGODB_HOST: Joi.string().required(),
  MONGODB_DATABASE: Joi.string().required(),
  MONGODB_PORT: Joi.number().default(27017),
  MONGODB_PARAMS: Joi.string().optional(),
});
