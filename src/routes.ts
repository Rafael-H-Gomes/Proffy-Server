import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnecitonsController from './controllers/ConnectionController';

const routes = express.Router();
const classesControlers = new ClassesController();
const connectionsControler = new ConnecitonsController();

routes.get('/classes', classesControlers.index);
routes.post('/classes', classesControlers.create);

routes.post('/connections', connectionsControler.create);

export default routes;