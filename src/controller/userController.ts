import { Request, Response } from "express";
import { UserService } from "../service/userService";

class UserController {
	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	public async createUserHandler(request: Request, response: Response) {
		const data = request.body;

		try {
			const user = await this.userService.createUser(data);

			return response.status(201).json(user);
		} catch (error) {
			console.log("createUserHandler", error);

			return response.status(400).json(error);
		}
	}
}

export { UserController };

