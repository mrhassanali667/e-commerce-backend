import { Router } from 'express'
import { getAllController, getOneController } from './controllers/get.js';
import { postController } from './controllers/post.js';
import { updateController } from './controllers/update.js';
import { deleteController } from './controllers/delete.js'

const orderRoutes = Router();

orderRoutes.get('/', getAllController)
orderRoutes.get('/order/:id', getOneController)
orderRoutes.post('/', postController)
orderRoutes.put('/:id', updateController)
orderRoutes.delete('/:id', deleteController)

export default orderRoutes