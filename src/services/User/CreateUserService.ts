import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import prisma from "../../database/prisma";


interface ICreate {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ email, name, password }: ICreate) {
        const secret = process.env.SECRET_JWT || 'c1026ccf9f922dc76c370e06de97675e089f8fb3'

        const userExists = await prisma.user.findFirst({ where: { email } })

        if (userExists) throw new Error("Email Exists")

        const passwordHash = await hash(password, 8)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash
            },
            select: {
                name: true, email: true, id: true
            }
        })

        const token = sign({ name: user.name, email: user.email }, secret, {
            subject: user.id,
            expiresIn: '7d'
        })

        const response = {
            user,
            token
        }

        return response
    }
}

export { CreateUserService }