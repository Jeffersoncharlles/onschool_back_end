import { Request, Response } from "express";
import { CreateCoursesService } from "../../services/Courses/CreateCoursesService";


class CreateCoursesController {
    async handle(req: Request, res: Response) {
        const create = new CreateCoursesService()
        const userId = req.userId
        const { description, image, name } = req.body
        const response = await create.execute({ userId, description, image, name })
        return res.json(response)
    }
}

export { CreateCoursesController }