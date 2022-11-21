import jwt  from 'jsonwebtoken';
import { User } from '../models/User';
import { UnauthorizedError } from './../helpers/api-errors';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';

type JwtPayload = {
    id: string
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if(!authorization) {
        throw new UnauthorizedError('Não autorizado');
    }

    const token = authorization.split(' ')[1];
    
    const { id } = jwt.verify(token, process.env.JWT_PASSWORD ?? '') as JwtPayload

    const userId = await User.findOne({ _id: id });

    if(!userId) {
        throw new UnauthorizedError('Usuário não foi encontrado no banco de dados')
    }

    const { name, email } = userId;

    req.user = { email, name, id };

    //return res.status(200).json({ name, email, id });

    next()
}
