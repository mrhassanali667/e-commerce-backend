import { Router } from 'express'
import { getAllController, getOneController } from './controllers/get.js';
import { postController } from './controllers/post.js';
import { updateController } from './controllers/update.js';
import { deleteController } from './controllers/delete.js'
import tokenVerification from '../../middlewares/tokenVerification.js';
import sellerVerification from './middlewares/sellerVarification.js';

const productRoutes = Router();

productRoutes.get('/', getAllController)
productRoutes.get('/product/:id', tokenVerification, sellerVerification, getOneController)
productRoutes.post('/', tokenVerification, sellerVerification, postController)
productRoutes.put('/:id', tokenVerification, sellerVerification, updateController)
productRoutes.delete('/:id', tokenVerification, sellerVerification, deleteController)

export default productRoutes