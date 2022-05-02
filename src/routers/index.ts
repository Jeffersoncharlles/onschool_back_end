import { Router, Request, Response } from 'express'

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

import { CreateUserController } from '../controllers/User/CreateUserController'
import { SessionUserController } from '../controllers/User/SessionUserController';
import { ListCursesUserController } from '../controllers/Courses/ListCursesUserController';
import { CreateCoursesController } from '../controllers/Courses/CreateCoursesController';



const Routers = Router()

const createUserController = new CreateUserController();
const sessionUserController = new SessionUserController()
const listCursesUserController = new ListCursesUserController()
const createCoursesController = new CreateCoursesController()

Routers.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'Hello World' })
})

//---- ROTAS USER ---//
Routers.post('/users', createUserController.handle)
Routers.post('/session', sessionUserController.handle)

//---- ROTAS COURSES ---//
Routers.get('/courses', ensureAuthenticate, listCursesUserController.handle)
Routers.post('/courses', ensureAuthenticate, createCoursesController.handle)
Routers.get('/course/:courseId',)



export { Routers }