import { Request, Response } from "express";
import { ListModulesCourseService } from "../../services/CoursesModule/ListModulesCourseService";


class ListModulesCourseController {
    async handle(req: Request, res: Response) {
        const modules = new ListModulesCourseService()
        const { cousesId } = req.body
        const userId = req.userId
        const response = await modules.execute({ cousesId, userId })

        return res.json(response)
    }
}

export { ListModulesCourseController }