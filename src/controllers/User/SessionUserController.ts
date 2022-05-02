import { Request, Response } from "express";
import { SessionUserService } from "../../services/User/SessionUserService";

class SessionUserController {
    async handle(req: Request, res: Response) {
        const session = new SessionUserService()
        const { email, password } = req.body
        const response = await session.execute({ email, password })
        return res.json(response)
    }
}

export { SessionUserController }