import { PrismaClient } from "@prisma/client";
import { ICreateTodoDTO } from "../dto/createTodoDTO";
import { AppError } from "../utils/AppErrors";


class TodoService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createTodo(data: ICreateTodoDTO) {
    try {
      const todo = await this.prisma.todo.create({
        data
      });

      return todo

    } catch (error) {
      console.log("createTodo:", error);

      throw new AppError("Fail to create todo.", 400);
    }
  }
}

export { TodoService };
