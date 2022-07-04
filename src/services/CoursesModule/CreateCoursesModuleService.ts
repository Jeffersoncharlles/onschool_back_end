import prisma from "../../database/prisma"

interface IListModules {
    userId: string;
    cousesId: string;
    name: string
}

class CreateCoursesModuleService {
    async execute({ cousesId, userId, name }: IListModules) {
        const modules = await prisma.modulesCourses.findMany({ where: { cousesId } })
        if (modules) throw new Error("Exists Modules!")

        const create = await prisma.modulesCourses.create({
            data: {
                name,
                cousesId,
            },
            select: { name: true, id: true, course: true }
        })

        return create
    }
}

export { CreateCoursesModuleService }