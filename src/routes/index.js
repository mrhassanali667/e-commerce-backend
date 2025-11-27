import express, { Router } from 'express'
import userRoutes from '../modules/user/routes.js';
import authRoutes from '../modules/auth/routes.js';
import productRoutes from '../modules/product/routes.js';
import tokenVerification from '../middlewares/tokenVerification.js';
import uploadRoutes from '../modules/upload/routes.js';
import orderRoutes from '../modules/Order/routes.js';

const routes = Router();


routes.use('/auth', authRoutes)
routes.use('/users', tokenVerification, userRoutes)
routes.use('/products', productRoutes)
routes.use('/order', orderRoutes)
routes.use('/upload', uploadRoutes)

export default routes