import {Router} from 'express'

import sprite from './controllers/spritesController'
import generation from './controllers/generationController'
import image from './controllers/imageController'
import user from './controllers/UsersController'

import multer from 'multer'
import multerConfig from './config/multer'

import {validateToken} from './config/auth'
const routes = Router()

routes.post('/sprite',multer(multerConfig).single('file'),sprite.store)
routes.get('/sprite',sprite.index)
routes.get('/sprite/:id',image.index)

routes.post('/generation',generation.store)
routes.get('/generation',generation.index)

routes.post('/signup',user.store)
routes.post('/ValidateToken',validateToken)
routes.post('/signin',user.index)
export default routes