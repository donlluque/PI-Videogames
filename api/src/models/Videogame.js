const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,

    },

    released: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },

    rating: {
      type: DataTypes.FLOAT,
    },

    image: {
      type: DataTypes.TEXT,
      defaultValue: 'https://emiliusvgs.com/wp-content/uploads/2022/04/unreal-engine-5-thumbnail.jpg',
    },

    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },


  },{timestamps: false})
};