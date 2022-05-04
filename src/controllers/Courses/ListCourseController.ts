import { Request, Response } from "express";
import { ListCourseService } from "../../services/Courses/ListCourseService";


class ListCourseController {
    async handle(req: Request, res: Response) {
        const listCourses = new ListCourseService()
        const response = await listCourses.execute()
        return res.json(response)
    }
}

export { ListCourseController }