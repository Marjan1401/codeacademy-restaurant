import { Router } from 'express';
import actions from './actions';

const customerRouter = Router();

customerRouter.get('/customer', actions.list);
customerRouter.get('/customer/:id', actions.get);
customerRouter.post('/customer', actions.create);
customerRouter.put('/customer/:id', actions.update);
customerRouter.delete('/customer/:id', actions.del);

export default customerRouter;
