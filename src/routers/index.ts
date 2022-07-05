import { Router } from 'express'

import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

import { CreateUserController } from '../controllers/User/CreateUserController'
import { SessionUserController } from '../controllers/User/SessionUserController';
import { ListCursesUserController } from '../controllers/Courses/ListCursesUserController';
import { CreateCoursesController } from '../controllers/Courses/CreateCoursesController';
import { CreateStudentController } from '../controllers/Student/CreateStudentController';
import { CreateCoursesModuleController } from '../controllers/CoursesModule/CreateCoursesModuleController';
import { ListModulesCourseController } from '../controllers/CoursesModule/ListModulesCourseController';
import { CreateClassesCoursesController } from '../controllers/Classes/CreateClassesCoursesController';



const Routers = Router()

const createUserController = new CreateUserController();
const sessionUserController = new SessionUserController()
const listCursesUserController = new ListCursesUserController()
const createCoursesController = new CreateCoursesController()

const createStudentController = new CreateStudentController()

const createCoursesModulesController = new CreateCoursesModuleController()
const listModulesCourseController = new ListModulesCourseController()


const createClassesCoursesController = new CreateClassesCoursesController()

Routers.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})

//---- ROTAS USER ---//
Routers.post('/users', createUserController.handle)
Routers.post('/users/session', sessionUserController.handle)

//---- ROTAS STUDENT ---//
Routers.post('/student', createStudentController.handle)

//---- ROTAS COURSES ---//
Routers.get('/courses', listCursesUserController.handle)
Routers.post('/courses', ensureAuthenticate, createCoursesController.handle)
Routers.get('/course/modules/', listModulesCourseController.handle)
Routers.post('/course/modules/', createCoursesModulesController.handle)


//---- ROTAS CLASSES ---//
Routers.post('/classes', createClassesCoursesController.handle)




export { Routers }