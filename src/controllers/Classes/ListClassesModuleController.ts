import { Request, Response } from "express";
import { ListClassesModuleService } from "../../services/Classes/ListClassesModuleService";


class ListClassesModuleController {
    async handle(req: Request, res: Response) {
        const listClassesModule = new ListClassesModuleService()
        const { moduleId } = req.body
        const response = await listClassesModule.execute({ moduleId })
        return response
    }
}

export { ListClassesModuleController }