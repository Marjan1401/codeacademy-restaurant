import { Router } from 'express';
import actions from './actions';

const menuRouter = Router();

menuRouter.get('/menu', actions.list);
menuRouter.get('/menu/:id', actions.get);
menuRouter.post('/menu', actions.create);
menuRouter.put('/menu/:id', actions.update);
menuRouter.delete('/menu/:id', actions.del);

export default menuRouter;
