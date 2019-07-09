import {Router} from 'express';
import actions from './actions';

const tableRoute = Router();

tableRoute.get('/table', actions.list);
tableRoute.get('/table/:id', actions.get);
tableRoute.post('/table', actions.create);
tableRoute.delete('/table/:id', actions.del);
tableRoute.put('/table/:id', actions.update);

export default tableRoute;