import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Customer: connection.import('../customer/model'),
  Employees: connection.import('../employees/model'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

//Relations
models.Customer.belongsTo(models.Employees);  
models.Employees.hasMany(models.Customer);  

models.connection = connection;
models.Sequelize = Sequelize;

export default models;
