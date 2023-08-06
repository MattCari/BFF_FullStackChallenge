import { Router } from "express";
import createUserController from "../controllers/userControllers/createUser.controller";
import { listUserController } from "../controllers/userControllers/listUsers.controller";
import { listUserByIdController } from "../controllers/userControllers/listUserById.controller";
import validateToken from "../middlewares/validateToken.middleware";
import findUserMiddleware from "../middlewares/findUserById.middleware";
import { registerContactController } from "../controllers/userControllers/registerContact.controller";
import { updateUserController } from "../controllers/userControllers/updateUser.controller";
import { deleteUserController } from "../controllers/userControllers/deleteUser.controller";
import validateBodyMiddleware from "../middlewares/validateBody.middleware";
import { uniqueUsernameMiddleware } from "../middlewares/uniqueUsername.middleware";
import { uniqueEmailMiddleware } from "../middlewares/uniqueEmail.middleware";
import { removeContactCotroller } from "../controllers/userControllers/removeContact.controller";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateBodyMiddleware,
  uniqueUsernameMiddleware,
  uniqueEmailMiddleware,
  createUserController
);
userRoutes.get("", listUserController);
userRoutes.get("/:id", listUserByIdController);
userRoutes.post(
  "/:id",
  validateToken,
  findUserMiddleware,
  registerContactController
);
userRoutes.patch(
  "/:id",
  validateToken,
  findUserMiddleware,
  uniqueUsernameMiddleware,
  uniqueEmailMiddleware,
  updateUserController
);
userRoutes.delete(
  "/:id",
  validateToken,
  findUserMiddleware,
  deleteUserController
);
userRoutes.patch(
  "/contact/:id",
  validateToken,
  findUserMiddleware,
  removeContactCotroller
);

export default userRoutes;
