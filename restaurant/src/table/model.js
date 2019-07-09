export default (sequelize, DataType) =>{
  const Tables = sequelize.define(
    'table', {
      id:{
        type: DataType.STRING,
        primaryKey: true
      },
      customerId:{
        type:DataType.STRING,
        allowNull: true
      },
      reservationTime:{
        type:DataType.STRING,
        allowNull: false
      },
      capacity:{
        type:DataType.STRING,
        allowNull: false
      }
  });
  return Tables;
};