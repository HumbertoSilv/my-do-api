import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO } from "../dto/createUserDTO";
import { AppError } from "../utils/AppErrors";

class UserService {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	public async createUser(data: ICreateUserDTO) {
		try {
			const user = await this.prisma.user.create({
				data
			})

			return user

		} catch (error) {
			console.log("createUser:", error);

			throw new AppError("Fail to create user.", 400);
		}
	}
}

export { UserService };
