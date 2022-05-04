import { Request, Response } from "express";
import { CreateCoursesService } from "../../services/Courses/CreateCoursesService";


class CreateCoursesController {
    async handle(req: Request, res: Response) {
        const create = new CreateCoursesService()
        const userId = req.userId
        const { name, description, image } = req.body
        const response = await create.execute({ userId, name, description, image })
        return res.json(response)
    }
}

export { CreateCoursesController }