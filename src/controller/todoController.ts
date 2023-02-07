import { Request, Response } from "express";
import { ICreateTodoDTO } from "../dto/createTodoDTO";
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
}

export { TodoController };
