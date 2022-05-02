import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import prisma from "../../database/prisma";


interface ISession {
    email: string;
    password: string;
}

class SessionUserService {
    async execute({ email, password }: ISession) {
        const secret = process.env.SECRET_JWT || 'c1026ccf9f922dc76c370e06de97675e089f8fb3'

        const userExists = await prisma.user.findFirst({ where: { email } })
        if (!userExists) throw new Error("User/Password not Authorization")

        const passwordMatch = await compare(password, userExists.password)

        if (!passwordMatch) throw new Error("User/Password not Authorization")

        const token = sign({ name: userExists.name, email: userExists.email }, secret, {
            subject: userExists.id,
            expiresIn: '7d'
        })

        const response = {
            id: userExists.id,
            name: userExists.name,
            email: userExists.email,
            token
        }

        return response

    }
}

export { SessionUserService }