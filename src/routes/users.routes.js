import { Router } from "express";
import {
  followUser,
  getAllUsers,
  getUserById,
  getUserFollowers,
  getUserFollowing,
} from "../controllers/users.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { userFollowingSchema } from "../schemas/user.schemas.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const usersRoutes = Router();

usersRoutes.post(
  "/users/me/following",
  validateSchema(userFollowingSchema),
  validateAuth,
  followUser
);
usersRoutes.get("/users", getAllUsers);
usersRoutes.get("/users/me/followers", getUserFollowers);
usersRoutes.get("/users/me/following", getUserFollowing);
usersRoutes.get("/users/:id", getUserById);

export default usersRoutes;
