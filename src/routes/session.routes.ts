import { Router } from "express";
import { userLoginSchema } from "../schemas/user.schema";
import validateBodyMiddleware from "../middlewares/validateBody.middleware";
import loginUserController from "../controllers/sessionControllers/userLogin.controller";

const sessionRoutes: Router = Router();

sessionRoutes.post(
  "",
  validateBodyMiddleware(userLoginSchema),
  loginUserController
);

export default sessionRoutes;
