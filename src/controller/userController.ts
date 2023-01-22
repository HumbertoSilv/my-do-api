import { Request, Response } from "express";
import { UserService } from "../service/userService";

class UserController {
	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	public async createUserHandle(request: Request, response: Response): Promise<Response> {
		const data = request.body;

		const user = await this.userService.createUser(data);

		return response.status(201).json(user);
	}
}

export { UserController };

