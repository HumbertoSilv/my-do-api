import { Request, Response } from "express";
import { ICreateTodoDTO } from "../dto/createTodoDTO";
import { IUpdateTodoDTO } from "../dto/updateUserTodoDTO";
import { TodoService } from "../service/todoService";

class TodoController {
  private todoService: TodoService;

  constructor() {
    this.todoService = new TodoService();
  }

  public async createTodoHandler(request: Request, response: Response) {
    const { title, description } = request.body;
    const { userId } = request.params;

    const data: ICreateTodoDTO = {
      user_id: userId,
      title,
      description
    }

    try {
      const todo = await this.todoService.createTodo(data);

      return response.status(201).json(todo);

    } catch (error) {
      console.log("createTodoHandler", error);

      return response.status(400).json(error);
    }
  }

  public async listOfUserTodoHandler(request: Request, response: Response) {
    const { userId } = request.params;

    try {
      const listOfTodo = await this.todoService.listOfUserTodo(userId);

      return response.status(200).json(listOfTodo);

    } catch (error) {
      console.log("listOfUserTodoHandler", error);

      return response.status(400).json(error);
    }
  }

  public async deleteUserTodoHandler(request: Request, response: Response) {
    const { todoId } = request.params;

    try {
      await this.todoService.deleteUserTodo(todoId);

      return response.status(204).send();

    } catch (error) {
      console.log("deleteUserTodoHandler", error);

      return response.status(400).json(error);
    }
  }

  public async updateUserTodoHandler(request: Request, response: Response) {
    const { todoId } = request.params;
    const data: IUpdateTodoDTO = request.body;

    try {
      await this.todoService.updateUserTodo(todoId, data);

      return response.status(204).send();

    } catch (error) {
      console.log("updateUserTodoHandler", error);

      return response.status(400).json(error);
    }
  }
}

export { TodoController };
