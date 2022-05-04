import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import prisma from "../../database/prisma";

interface ICreate {
    name: string
    password: string
    email: string;
    courseId: string;
}

class CreateStudentService {
    async execute({ email, name, password, courseId }: ICreate) {
        const secret = process.env.SECRET_JWT || 'c1026ccf9f922dc76c370e06de97675e089f8fb3'

        const studentExists = await prisma.student.findUnique({ where: { email } })

        if (studentExists) {
            throw new Error("Email Exists")
        }

        const course = await prisma.course.findFirst({ where: { id: courseId } })

        if (!course) {
            throw new Error("Couse invalid")
        }

        // const enrolment = await prisma.enrolment.create

        const passwordHash = await hash(password, 8)
        const student = await prisma.student.create({
            data: {
                name,
                email,
                password: passwordHash,
                Enrolment: {
                    create: {
                        courseId
                    }
                }
            },
            select: {
                name: true, email: true, id: true, Enrolment: true
            }
        })

        const token = sign({ name: student.name, email: student.email }, secret, {
            subject: student.id,
            expiresIn: '7d'
        })

        const response = {
            student,
            token
        }

        return response

    }
}

export { CreateStudentService }