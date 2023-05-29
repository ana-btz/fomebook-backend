import Joi from "joi";

export const postSchema = Joi.object({
  imageUrl: Joi.string().required(),
  description: Joi.string().max(1200).required(),
});
