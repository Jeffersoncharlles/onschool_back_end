import prisma from "../../database/prisma";

interface IListCurse {
    userId: string;
}

class ListCursesUserService {
    async execute({ userId }: IListCurse) {

        const courses = await prisma.course.findMany({ where: { id: userId } })

        if (!courses) throw new Error("not Courses")


        return courses
    }
}

export { ListCursesUserService }