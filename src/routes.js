import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.send('hello walafi2'));

export default routes;
