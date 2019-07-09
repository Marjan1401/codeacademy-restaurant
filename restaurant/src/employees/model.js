export default (sequelize, DataType) => {
  const Employees = sequelize.define(
    'employees', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false
    },
    salary: {
      type: DataType.INTEGER,
      allowNull: false
    },
    dateOfEmployment: {
      type: DataType.DATE
    },
    positionTitle : {
      type: DataType.STRING
    },
    // createdAt: {
    //   type: DataType.STRING
    // },
    // updatedAt: {
    //   type: DataType.STRING
    // },
    // deletedAt: {
    //   type: DataType.STRING
    // }
  });
  return Employees;
};