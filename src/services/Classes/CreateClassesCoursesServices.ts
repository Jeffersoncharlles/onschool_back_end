import prisma from "../../database/prisma"


interface IListClasses {
    modulesCoursesId?: string
    courseId: string;
    name: string;
    type: 'QUIZ' | 'VIDEO'
    userId: string
}

class CreateClassesCoursesServices {
    async execute({ modulesCoursesId, courseId: id, name, type, userId }: IListClasses) {

        const curses = await prisma.course.findFirst({ where: { id } })

        if (!curses) throw new Error("No Exists Curses!")

        const modules = await prisma.modulesCourses.findFirst({ where: { cousesId: curses.id } })

        if (!modules) throw new Error("Not exists Modules")


        // const Exists = await prisma.classes.findFirst({ where: { } })
        // if (Exists.) throw new Error('Classes Existis ! invalid')

        const create = await prisma.classes.create({
            data: {
                classOrder: 1,
                courseId: curses.id,
                modulesCoursesId: modules.id,
                type,
                name
            },

        })

        return create

    }
}

export { CreateClassesCoursesServices }