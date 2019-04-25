import hat from 'hat';
import Sequelize from 'sequelize';
import models from '../models/index';

const Customer = models.Customer;

const list = async(req, res, next) => {
  const result: Array = await Customer.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Customer.find({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    firstName,
    lastName,
    phone,
    employee,
    table,
  }: {
    firstName: string,
    lastName: string,
    phone: string,
    employee: string,
    table: string,
  } = req.body;

  const customerId = hat();

  await Customer.create({
    id: customerId,
    firstName,
    lastName,
    phone,
    employee,
    table
  });
  res.status(201).send({ info: 'Customer has been created!'});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    firstName: ?string,
    lastName: ?string,
    phone: ?string,
    employee: ?string,
    table: ?string
  } = Object.assign({}, req.body);

  await Customer.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;

  await Customer.destroy({ where: { id }});
  res.status(202).send({ info: `Customer ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}