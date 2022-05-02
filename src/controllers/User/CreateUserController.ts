import { Request, Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const create = new CreateUserService()
        const { email, name, password } = req.body

        const response = await create.execute({ email, name, password })

        return res.json(response)
    }
}

export { CreateUserController }