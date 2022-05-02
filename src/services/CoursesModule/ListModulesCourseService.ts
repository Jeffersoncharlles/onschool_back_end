import prisma from "../../database/prisma"

interface IListModules {
    userId: string;
    cousesId: string;
}

class ListModulesCourseService {
    async execute({ cousesId, userId }: IListModules) {
        const modules = await prisma.modulesCourses.findMany({ where: { cousesId } })
        if (!modules) throw new Error("Not exists Modules")
        return modules
    }
}

export { ListModulesCourseService }