import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO } from "../dto/createUserDTO";

class UserService {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	public async createUser(data: ICreateUserDTO) {

		const user = await this.prisma.user.create({
			data
		})

		return user
	}
}

export { UserService };
