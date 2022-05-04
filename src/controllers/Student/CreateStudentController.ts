import { Request, Response } from "express";
import { CreateStudentService } from "../../services/Student/CreateStudentService";

class CreateStudentController {
    async handle(req: Request, res: Response) {
        const createStudent = new CreateStudentService()
        const { name, password, email, courseId } = req.body
        const response = await createStudent.execute({ name, password, email, courseId })
        return res.json(response)

    }
}

export { CreateStudentController }