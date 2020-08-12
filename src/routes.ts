import { Router } from 'express'

import UserController from '@controllers/UserController'
import AuthController from '@controllers/AuthController'
import authMiddleware from './middlewares/authMiddleware'

const routes = Router()

routes.post('/users', UserController.store)
routes.get('/users', authMiddleware, UserController.index)

routes.post('/auth', AuthController.authenticate)

export default routes
