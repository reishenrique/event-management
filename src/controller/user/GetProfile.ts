import { authMiddleware } from '../../middleware/authMiddleware';
import { Request, Response, Router } from 'express'

const getProfile = Router();

getProfile.get('/', async (_req: Request, res: Response) => {
        return res.json({ authMiddleware });
})

export { getProfile };
