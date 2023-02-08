import { PrismaClient } from "@prisma/client";
import { ICreateTodoDTO } from "../dto/createTodoDTO";
import { IUpdateTodoDTO } from "../dto/updateUserTodoDTO";
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

      return todo;

    } catch (error) {
      console.log("createTodo:", error);

      throw new AppError("Fail to create todo.", 400);
    }
  }

  public async listOfUserTodo(userId: string) {
    try {
      const todoList = await this.prisma.todo.findMany({
        where: {
          user_id: userId
        }
      });

      return todoList;

    } catch (error) {
      console.log("listOfUserTodo:", error);

      throw new AppError("Failed to fetch list.", 400);
    }
  }

  public async deleteUserTodo(todoId: string) {
    try {
      await this.prisma.todo.delete({
        where: {
          id: todoId
        }
      });

    } catch (error) {
      console.log("deleteUserTodo:", error);

      throw new AppError("Failed to delete todo.", 400);
    }
  }

  public async updateUserTodo(todoId: string, data: IUpdateTodoDTO) {
    try {
      await this.prisma.todo.update({
        where: {
          id: todoId
        },
        data: {
          updated_at: new Date(),
          ...data
        }
      });

    } catch (error) {
      console.log("updateUserTodo:", error);

      throw new AppError("Failed to update todo.", 400);
    }
  }
}

export { TodoService };
