import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  
  //APP
  NODE_ENV: Joi.string()
    .valid('development', 'staging', 'production')
    .allow('', null)
    .empty(['', null])
    .default('production'),
  APP_PORT: Joi.number().allow('', null).empty(['', null]).default(80),
  CORS_HOST: Joi.string().allow('', null).empty(['', null]).default(''),
  IMAGES_PATH: Joi.string()
    .allow('', null)
    .empty(['', null])
    .default('public/images'),

  //DATABASE
  MONGODB_PROTOCOL: Joi.string()
    .valid('mongodb', 'srv', 'mongodb+srv')
    .allow('', null)
    .empty(['', null])
    .default('mongodb'),
  MONGODB_USERNAME: Joi.string()
    .allow('', null)
    .empty(['', null])
    .default('fastpoke'),
  MONGODB_PASSWORD: Joi.string()
    .allow('', null)
    .empty(['', null])
    .default('Ch4nG3m3pL34se'),
  MONGODB_HOST: Joi.string()
    .allow('', null)
    .empty(['', null])
    .default('fastpoke-db'),
  MONGODB_DATABASE: Joi.string()
    .allow('', null)
    .empty(['', null])
    .default('fastpoke'),
  MONGODB_PORT: Joi.number().allow('', null).empty(['', null]).default(27017),
  MONGODB_PARAMS: Joi.string().allow('', null).empty(['', null]).optional(),
});
