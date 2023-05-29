import { Router } from "express";
import { createPost } from "../controllers/posts.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { postSchema } from "../schemas/post.schemas.js";

const postsRouter = Router();

postsRouter.post("/posts", validateSchema(postSchema), createPost);

export default postsRouter;
