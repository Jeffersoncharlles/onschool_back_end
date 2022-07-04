import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;

}

const ensureAuthenticate = (req: Request, res: Response, next: NextFunction) => {
    const secret = process.env.SECRET_JWT || 'c1026ccf9f922dc76c370e06de97675e089f8fb3'
    const jwtPublicKey = process.env.JWT_PUBLIC_KEY || 'c1026ccf9f922dc76c370e06de97675e089f8fb3';

    // Receber o token
    const authToken = req.headers.authorization
    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(' ')//pegar token depois do  espaço Bearer TOKEN

    try {
        //validar o token
        const { sub } = verify(token, jwtPublicKey) as IPayload

        req.userId = sub;

        return next()
    } catch (error) {
        return res.status(401).end()
    }
}

export { ensureAuthenticate }