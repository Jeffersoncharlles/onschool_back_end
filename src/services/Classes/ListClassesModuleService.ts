import prisma from "../../database/prisma"


interface IListClasses {
    moduleId: string
}

class ListClassesModuleService {
    async execute({ moduleId }: IListClasses) {

        const classes = await prisma.classes.findMany({
            where: {
                modulesCoursesId: moduleId
            },
            include: { video: true },
        })

        return classes;
    }
}

export { ListClassesModuleService }