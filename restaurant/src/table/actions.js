// import hat from 'hat';
// import Sequelize from 'sequelize';
// import models from '../models/index';

// const Tables = models.Tables

// const list = async(req, res, next) =>{
//   const result = await Tables.findAll({
//     include : [
//       {
//         model : models.Customer,
//         as:'customer'
//       }
//     ]
//   });
//   res.status(200).send(result);
//   // res.status(404).send('No table reservation ');
//   await next;
// }

// const get = async(req, res, next) =>{
//   const {id}:{id:string} =req.params;
  
//   const table = await Tables.findOne(
//     {
//       include : [
//         {
//           model : models.Customer,
//           as: 'customer'
//         }
//       ],
//       where :{id}
//     });

//     if(table == null){
//       res.status(400).sand(`The table with id ${id} doesn't exist`);
//       await next;
//     }
//     res.status(200).sand(table);
//     await next;
// } 

// const create = async (req, res, next) =>{
//   const {capacity}:{capacity:string} = req.body;
  
//   const customerId = hat();

//   await Tables.create({
//     id:customerId,
//     capacity
//   });
//   res.status(201).send(`Table with id ${customerId} has been reserved.`);
//   await next;
// }

// const del = async (req, res, next) =>{
//   const {id}:{id:string} = req.params;
  
//   const table = await models.Tables.findOne({where: {id}});
//   if(table==null){
//   res.status(400).send(`The table with id ${id} doesn't exist.`);
//   await next;
// }
//   await Tables.destroy({where: {id}}); 
//   res.status(200).send(`The table with id ${id} has been deleted.`)
//   await next;
// }


// const update = async (req, res, next) =>{
//   const { id }: { id: string } = req.params;
//   const updateData: {
//     capacity:string
//   } = Object.assign({}, req.body);
//   const table = await models.Tables.findOne({where: {id}});
//   if(table==null){
//   res.status(400).send(`The table with id ${id} doesn't exist.`);
//   await next;
// }
//   await Tables.update(updateData, {where: {id}});
//   res.send(`The table with id ${id} has been updated.`).status(204);
//   await next;
// }

// export default{
//   list,
//   create,
//   del,
//   update,
//   get
// }

import hat from 'hat';
import Sequelize from 'sequelize';
import models from '../models/index';

const Tables = models.Tables;

const list = async(req, res, next) => {
  const result: Array = await Tables.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Tables.find({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    reservationTime,
    capacity
  }: {
    reservationTime: string,
    capacity: string,
  } = req.body;

  const customerId = hat();

  await Tables.create({
    id: customerId,
    reservationTime,
    capacity
  });
  res.status(201).send({ info: `Customer with id ${customerId} has reserved table!`});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    reservationTime: ?string,
    capacity: ?string
  } = Object.assign({}, req.body);

  await Tables.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;

  await Tables.destroy({ where: { id }});
  res.status(202).send({ info: `Table ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}