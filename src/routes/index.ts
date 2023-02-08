import { Router } from "express";
import { todoRouter } from "./todo.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.use("/my-do", userRouter);
router.use("/my-do", todoRouter);



export default router;