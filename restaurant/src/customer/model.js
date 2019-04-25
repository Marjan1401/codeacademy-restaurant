export default (sequelize, DataType) => {
  const Customer = sequelize.define(
    'customer', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false,
    },
    phone: {
      type: DataType.STRING,
    },
    employee: {
      type: DataType.STRING,
    },
    table: {
      type: DataType.DATE
    },
    createdAt: {
      type: DataType.DATE
    },
    updatedAt: {
      type: DataType.DATE
    },
    deletedAt: {
      type: DataType.DATE
    }
  });
  return Customer;
};