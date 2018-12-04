module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    deliveryAddress: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isEmail: true
      }
    },
  });
  return Order;
};
