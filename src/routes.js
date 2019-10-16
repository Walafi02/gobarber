import { Router } from 'express';

import userCOntroller from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', userCOntroller.store);

export default routes;
