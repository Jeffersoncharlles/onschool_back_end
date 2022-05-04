import prisma from "../../database/prisma"


class ListCourseService {
    async execute() {
        const courses = await prisma.course.findMany()
        return courses
    }
}

export { ListCourseService }