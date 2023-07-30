import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/user.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import ensurePermissionMidlleware from "../middlewares/ensurePermissionUser.middleware";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController);
userRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensurePermissionMidlleware,
  listUserController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValid(userSchemaUpdate),
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensurePermissionMidlleware,
  deleteUserController
);

export { userRoutes };
