import prisma from "../../database/prisma"
import slugify from 'slugify'


interface IListClasses {
    modulesCoursesId?: string
    courseId: string;
    name: string;
    type: 'QUIZ' | 'VIDEO'
    userId: string
    description?: string;
    url: string;
}

class CreateClassesCoursesServices {
    async execute({ modulesCoursesId, courseId: id, name, type, userId, description, url }: IListClasses) {

        const curses = await prisma.course.findFirst({ where: { id } })

        if (!curses) throw new Error("No Exists Curses!")

        const modules = await prisma.modulesCourses.findFirst({ where: { id: modulesCoursesId } })

        if (!modules) throw new Error("Not exists Modules")

        if (type === 'VIDEO') {
            const create = await prisma.classes.create({
                data: {
                    name,
                    courseId: curses.id,
                    modulesCoursesId: modules.id,
                    type,
                    video: {
                        connectOrCreate: {
                            where: {
                                id
                            },
                            create: {
                                name,
                                slug: slugify(name, { lower: true, replacement: '_' }),
                                description,
                                url,
                                modulesCoursesId
                            }
                        }
                    }
                },
                include: {
                    modulesCourses: true,
                    video: true
                }
            })

            return create
        }

        if (type === 'QUIZ') {
            // const create = await prisma.classes.create({
            //     data: {
            //         name,
            //         courseId: curses.id,
            //         modulesCoursesId: modules.id,
            //         type,
            //         quiz: {
            //             connectOrCreate: {
            //                 where: {
            //                     id
            //                 },
            //                 create: {
            //                    answer,
            //                    option1,
            //                    option2,
            //                    option3,
            //                    option4,
            //                    question,
            //                 }
            //             }
            //         }
            //     },
            //     include: {
            //         modulesCourses: true,
            //         quiz: true
            //     }
            // })

            // return create

        }

    }
}

export { CreateClassesCoursesServices }