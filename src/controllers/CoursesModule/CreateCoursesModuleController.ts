import { Request, Response } from "express";
import { CreateCoursesModuleService } from "../../services/CoursesModule/CreateCoursesModuleService";


class CreateCoursesModuleController {
    async handle(req: Request, res: Response) {
        const create = new CreateCoursesModuleService()
        const { cousesId, name } = req.body
        const userId = req.userId

        const response = await create.execute({ cousesId, name, userId })

        return res.json(response)

    }
}

export { CreateCoursesModuleController }