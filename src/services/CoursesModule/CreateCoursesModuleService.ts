import prisma from "../../database/prisma"

interface IListModules {
    userId: string;
    cousesId: string;
    name: string
}

class CreateCoursesModuleService {
    async execute({ cousesId: id, userId, name }: IListModules) {
        const curses = await prisma.course.findFirst({ where: { id } })

        if (!curses) throw new Error("No Exists Curses!")

        const modules = await prisma.modulesCourses.findFirst({ where: { cousesId: curses.id } })

        if (modules?.name === name) throw new Error("Exists modules!")

        const create = await prisma.modulesCourses.create({
            data: {
                name,
                cousesId: curses.id,
            },
            select: { name: true, id: true, course: true }
        })

        return create

    }
}

export { CreateCoursesModuleService }