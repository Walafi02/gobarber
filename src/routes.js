import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import userController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';
import fileController from './app/controllers/FileController';
import providersController from './app/controllers/ProvidersController';
import appointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);

routes.put('/users', userController.update);

routes.get('/providers', providersController.index);

routes.post('/appointment', appointmentController.store);

routes.post('/files', upload.single('file'), fileController.store);

export default routes;
