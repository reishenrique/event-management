import { Request, Response, Router } from 'express'

const getProfile = Router();

getProfile.get('/', async (req: Request, res: Response) => {
        return res.json(req.user);
})

export { getProfile };
