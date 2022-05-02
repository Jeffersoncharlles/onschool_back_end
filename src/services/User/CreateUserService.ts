import prisma from "../../database/prisma";


interface ICreate {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ email, name, password }: ICreate) {

        const userExists = await prisma.user.findFirst({ where: { email } })

        if (userExists) throw new Error("Email Exists")



    }
}

export { CreateUserService }