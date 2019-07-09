import { Router } from 'express';

import employees from '../employees/index';
import customer from '../customer/index';
import table from '../table/index';
import menu from '../menu/index';

const indexRouter = Router();

indexRouter.use(employees.route);
indexRouter.use(customer.route);
indexRouter.use(table.route);
indexRouter.use(menu.route);

export default indexRouter;