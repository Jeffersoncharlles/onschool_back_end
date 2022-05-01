import { Router, Request, Response } from 'express'

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

import { CreateUserController } from '../controllers/User/CreateUserController'



const Routers = Router()

const createUserController = new CreateUserController();

Routers.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})

//---- ROTAS USER ---//
Routers.post('/users', createUserController.handle)



export { Routers }