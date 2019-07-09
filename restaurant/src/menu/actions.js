import hat from 'hat';
import Sequelize from 'sequelize';
import models from '../models/index';


const Menu = models.Menu;

const list = async(req, res, next) => {
  const result: Array = await Menu.findAll({
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

  const result: Object = await Menu.find({
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
    mainDish,
    dessert,
    drinks
  }: {
    mainDish: string,
    dessert: string,
    drink: string
  } = req.body;

  const menuId = hat();

  await Menu.create({
    id:menuId,
    mainDish,
    dessert,
    drinks
  });
  res.status(201).send({ info: 'Menu has been created!'});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    mainDish: ?string,
    dessert: ?string,
    drink: ?string
  } = Object.assign({}, req.body);

  await Menu.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;

  await Menu.destroy({ where: { id }});
  res.status(202).send({ info: `Menu ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}