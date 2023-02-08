import { Router } from "express";
import { UserController } from "../controller/userController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/accounts", (req, res) => {
	userController.createUserHandler(req, res)
});

export { userRouter };
