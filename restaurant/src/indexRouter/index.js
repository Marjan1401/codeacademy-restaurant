import { Router } from 'express';

import employees from '../employees/index';
import customer from '../customer/index';

const indexRouter = Router();

indexRouter.use(employees.route);
indexRouter.use(customer.route);

export default indexRouter;