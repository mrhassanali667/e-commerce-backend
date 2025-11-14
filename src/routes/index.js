import express, { Router } from 'express'
import userRoutes from '../modules/user/routes.js';

const routes = Router();


// routes.use('/products',)
routes.use('/users', userRoutes)

export default routes