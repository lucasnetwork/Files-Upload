import {Router} from 'express'
import sprite from './controllers/spritesController'
import generation from './controllers/generationController'
import image from './controllers/imageController'
import multer from 'multer'
import multerConfig from './config/multer'

const routes = Router()

routes.post('/sprite',multer(multerConfig).single('file'),sprite.store)
routes.get('/sprite',sprite.index)
routes.get('/sprite/:id',image.index)

routes.post('/generation',generation.store)
routes.get('/generation',generation.index)
export default routes