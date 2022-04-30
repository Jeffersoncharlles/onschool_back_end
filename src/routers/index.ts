import { Router, Request, Response } from 'express'


const Routers = Router()

Routers.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})


export { Routers }