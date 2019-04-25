import { Router } from 'express';
import actions from './actions';

const employeesRouter = Router();

employeesRouter.get('/employees', actions.list);
employeesRouter.get('/employees/:id', actions.get);
employeesRouter.post('/employees', actions.create);
employeesRouter.put('/employees/:id', actions.update);
employeesRouter.delete('/employees/:id', actions.del);

export default employeesRouter;
