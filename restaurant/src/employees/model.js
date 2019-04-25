export default (sequelize, DataType) => {
  const Employees = sequelize.define(
    'employees', {
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
    salary: {
      type: DataType.STRING,
    },
    dateOfEmployment: {
      type: DataType.DATE
    },
    positionTitle : {
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
  return Employees;
};