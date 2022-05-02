import prisma from "../../database/prisma"


interface IListClasses {
    moduleId: string
}

class ListClassesModuleService {
    async execute({ moduleId }: IListClasses) {

        const classes = await prisma.classes.findMany({ where: { coursesId: moduleId } })
    }
}

export { ListClassesModuleService }