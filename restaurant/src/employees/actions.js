import hat from 'hat';
import Sequelize from 'sequelize';
import models from '../models/index';

const Employees = models.Employees;

const list = async(req, res, next) => {
  const result: Array = await Employees.findAll({
    include: [
      {
        model : models.Customer
      }
    ]
  });
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Employees.find({
     where: { id },
     include: [
      {
        model: models.Customer
      }
    ]
    });
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    firstName,
    lastName,
    salary,
    dateOfEmployment,
    positionTitle,
  }: {
    firstName: string,
    lastName: string,
    salary: string,
    dateOfEmployment: string,
    positionTitle: string,
  } = req.body;

  const employeeId = hat();

  await Employees.create({
    id: employeeId,
    firstName,
    lastName,
    salary,
    dateOfEmployment,
    positionTitle
  });
  res.status(201).send({ info: 'Employee has been created!'});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    firstName: ?string,
    lastName: ?string,
    salary: ?string,
    dateOfEmployment: ?string,
    positionTitle: ?string
  } = Object.assign({}, req.body);

  await Employees.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;

  await Employees.destroy({ where: { id }});
  res.status(202).send({ info: `Employee ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}