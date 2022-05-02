import prisma from "../../database/prisma"

interface ICreate {
    userId: string;
    name: string;
    description: string,
    image: string
}

class CreateCoursesService {
    async execute({ userId, name, description, image }: ICreate) {

        const user = await prisma.user.findFirst({ where: { id: userId } })
        console.log("User: " + user?.role)
        if (!user) {
            throw new Error("Not Authorization")
        }

        if (String(user?.role) !== String("ADMIN")) {
            throw new Error("is no authorization")
        }

        const course = await prisma.courses.create({
            data: {
                name,
                description,
                image,
                userId
            }, select: {
                id: true, name: true, description: true, image: true
            }
        })

        return course

    }
}

export { CreateCoursesService }