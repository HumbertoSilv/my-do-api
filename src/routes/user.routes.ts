import { Router } from "express";
import { UserController } from "../controller/userController";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/", (req, res) => {
    userController.createUserHandle(req, res)
});

export { userRouter };
