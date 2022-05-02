import { Request, Response } from "express"
import { ListCursesUserService } from "../../services/Courses/ListCursesUserService"


class ListCursesUserController {
    async handle(req: Request, res: Response) {
        const listCousesUser = new ListCursesUserService()
        const userId = req.userId
        const response = await listCousesUser.execute({ userId })
        return res.json(response)
    }
}

export { ListCursesUserController }