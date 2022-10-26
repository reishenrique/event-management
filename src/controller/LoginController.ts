import { BadRequestError } from './../helpers/api-errors';
import { User } from '../models/User';
import { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const loginUser = Router();

loginUser.post('/', async (req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if(!user) {
        throw new BadRequestError('E-mail ou senha inválidos')
    }

    const verifyPassword = await bcrypt.compare(password, user.password)
    if(!verifyPassword) {
        throw new BadRequestError('E-mail ou senha inválidos')
    }

    const token = jwt.sign({ id: user.id}, process.env.JWT_PASSWORD ?? '', { 
        expiresIn: '8h'
    })

    return res.status(200).json({ 
        user: user.email, 
        token: token, 
        message: 'Usuário logado com sucesso'
    })
})

export { loginUser }