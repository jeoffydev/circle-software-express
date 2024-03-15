
import express, { Router } from 'express'
import path from 'path'

const router = Router()


//router.get('/', express.static(path.join(__dirname, 'build')))
// (req: Request, res: Response) => {
//     return res.json({
//         message: 'HELLO!'
//     })
// }
router.get('/',  express.static('../build'))

export default router
