import {Router} from 'express'
import {store} from './controllers/spritesController'

const routes = Router()

routes.get('/',(req,res) =>res.json("<h1>oi</h1>"))
routes.post('/sprite',store)

export default routes