import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Customer: connection.import('../customer/model'),
  Employees: connection.import('../employees/model'),
  Tables: connection.import('../table/model'),
  Menu :connection.import('../menu/model')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

//Relations
models.Customer.belongsTo(models.Tables); 
models.Menu.belongsTo(models.Customer);

// models.Customer.hasMany(Employees);

 models.Employees.belongsTo(models.Customer);
 //models.Employees.hasMany(models.Tables);

// models.Tables.belongsTo(models.Customer);



models.connection = connection;
models.Sequelize = Sequelize;

export default models;
