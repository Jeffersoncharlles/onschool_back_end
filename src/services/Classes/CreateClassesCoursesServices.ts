import prisma from "../../database/prisma"


interface IListClasses {
    modulesCoursesId?: string
    courseId: string;
    name: string;
    type: 'QUIZ' | 'VIDEO'
    classOrder: number;
    userId: string

}

class CreateClassesCoursesServices {
    async execute({ modulesCoursesId, classOrder, courseId, name, type, userId }: IListClasses) {

        const Exists = await prisma.classes.findUnique({ where: { name } })
        if (Exists) throw new Error('Classes Existis ! invalid')

        const create = await prisma.classes.create({
            data: {
                type,
                name,
                classOrder,
                courseId,
                modulesCoursesId
            },

        })


    }
}

export { CreateClassesCoursesServices }