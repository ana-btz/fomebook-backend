import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  photo: Joi.string().required(),
  bio: Joi.string().max(200).required(),
  password: Joi.string().min(3).required(),
  comfirmPassword: Joi.string().min(3).required().valid(Joi.ref("password")),
});

export const userFollowingSchema = Joi.object({
  followedUserId: Joi.number().required(),
});
