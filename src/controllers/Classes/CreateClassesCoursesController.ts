import { Request, Response } from "express";
import { CreateClassesCoursesServices } from "../../services/Classes/CreateClassesCoursesServices";



class CreateClassesCoursesController {
    async handle(req: Request, res: Response) {
        const create = new CreateClassesCoursesServices();
        const { courseId, name, type, modulesCoursesId } = req.body
        const userId = req.userId

        const response = await create.execute({ courseId, name, type, modulesCoursesId, userId })

        return res.json(response)

    }
}

export { CreateClassesCoursesController }