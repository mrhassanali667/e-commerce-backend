import express, { Router } from 'express'
import userRoutes from '../modules/user/routes.js';
import authRoutes from '../modules/auth/routes.js';

const routes = Router();


routes.use('/auth',authRoutes)
routes.use('/users', userRoutes)

export default routes