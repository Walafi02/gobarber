import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import userController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';
import fileController from './app/controllers/FileController';
import providersController from './app/controllers/ProvidersController';
import appointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import notificationController from './app/controllers/NotificationController';
import availableController from './app/controllers/AvailableController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);

routes.put('/users', userController.update);

routes.get('/providers', providersController.index);
routes.get('/providers/:providerId/available', availableController.index);

routes.get('/appointment', appointmentController.index);
routes.post('/appointment', appointmentController.store);
routes.delete('/appointment/:id', appointmentController.delete);

routes.post('/files', upload.single('file'), fileController.store);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', notificationController.index);
routes.put('/notifications/:id', notificationController.update);

export default routes;
