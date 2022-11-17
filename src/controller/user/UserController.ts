import { BadRequestError } from '../../helpers/api-errors';
import { Router, Request, Response } from 'express';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';

const userCreate = Router()

userCreate.post('/', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const users = { name, email, password: hashPassword };

    const userExists = await User.findOne({ email })

    if(userExists) {
        throw new BadRequestError('Email já cadastrado')
    }

    await User.create(users);
    res.status(201).json({ message: 'Usuário inserido no sistema com sucesso' })
})

export { userCreate }
