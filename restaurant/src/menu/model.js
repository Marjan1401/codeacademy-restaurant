export default (sequelize, DataType) => {
  const Menu = sequelize.define(
    'menu', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    mainDish: {
      type: DataType.STRING,
      allowNull: false
    },
    dessert: {
      type: DataType.STRING,
      allowNull: false
    },
    drinks: {
      type: DataType.STRING,
      allowNull: false
    }
    
  });
  return Menu;
};