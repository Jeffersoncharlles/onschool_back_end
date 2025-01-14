import prisma from "../../database/prisma"

interface ICreate {
    userId?: string;
    name: string;
    description: string,
    image: string
}

class CreateCoursesService {
    async execute({ userId, name, description, image }: ICreate) {

        // const user = await prisma.user.findFirst({ where: { id: userId } })
        // if (!user) {
        //     throw new Error("Not Authorization")
        // }


        const course = await prisma.course.create({
            data: {
                name,
                description,
                image,
            }, select: {
                id: true, name: true, description: true, image: true
            }
        })

        return course

    }
}

export { CreateCoursesService }