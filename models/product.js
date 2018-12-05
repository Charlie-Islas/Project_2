module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    unitaryPrice: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

  });

  /*Product.associate=function(models){
    Product.belongsTo(models.Order,{
      onDelete: "cascade"
    });
  };*/

  Product.associate=function(models){
    Product.hasOne(models.Order,{
      onDelete: "cascade",
      
    });
  };
  return Product;
};
