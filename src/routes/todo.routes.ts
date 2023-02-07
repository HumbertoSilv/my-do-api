import { Router } from "express";
import { TodoController } from "../controller/todoController";

const todoRouter = Router();

const todoController = new TodoController();

todoRouter.post("/:userId", (req, res) => {
  todoController.createTodoHandler(req, res)
});

export { todoRouter };
