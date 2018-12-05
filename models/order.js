module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isEmail: true
      }
    }
  });

 /* Order.associate=function(models){
    Order.hasOne(models.Product,{
      foreignKey: {allowNull:false}
    });
  };*/

  Order.associate=function(models){
    Order.belongsTo(models.Product,{
      foreignKey:{allowNull:false}
  
     
    });
  };

  

  return Order;
};
