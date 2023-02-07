import { Router } from "express";
import { TodoController } from "../controller/todoController";

const todoRouter = Router();

const todoController = new TodoController();

todoRouter.post("/:userId", (req, res) => {
  todoController.createTodoHandler(req, res)
});

todoRouter.get("/:userId", (req, res) => {
  todoController.listOfUserTodoHandler(req, res)
});

todoRouter.delete("/:todoId", (req, res) => {
  todoController.deleteUserTodoHandler(req, res)
});

todoRouter.patch("/:todoId", (req, res) => {
  todoController.updateUserTodoHandler(req, res)
});

export { todoRouter };
