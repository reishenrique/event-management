import { Request, Response, Router } from 'express'
import { User } from '../models/User'
import { UnauthorizedError } from '../helpers/api-errors';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

type JwtPayload = {
    id: string
}

const getProfile = Router();

getProfile.get('/', async (req: Request, res: Response) => {
    const { authorization } = req.headers
    if(!authorization) {
        throw new UnauthorizedError('Não autorizado')
    }

    const token = authorization.split(' ')[1]
    const { id } = jwt.verify(token, process.env.JWT_PASSWORD ?? '') as JwtPayload

    const user = await User.findOne({ id })

    if(!user) {
        throw new UnauthorizedError('Não autorizado')
    }

    const { name, email } = user

    return res.status(200).json({name, email, id})
})

export { getProfile }
