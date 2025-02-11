const { DataTypes, Model } = require('sequelize');
const sequelize = require("./../conection");

class Product extends Model { }

Product.init(
    {
        //DATOS DE LA TABLA
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
        nombre: DataTypes.STRING,
        precio: DataTypes.FLOAT,
        fecha_caducidad: DataTypes.DATE,
        unidades_minimas: DataTypes.INTEGER,
    },
    {

        sequelize, //CONEXION
        //freezeTableName: true, //PARA TENER EL NOMBRE QUE QUERAMOS EN LA TABLA
        modelName: 'Product', // NOMBRE DE LA TABLA QUE SE LE AÑADIRA S
        //lOS CAMPOS SON "ÚTILES" MEJOR DEJARLOS
        // timestamps: false,//PARA QUE NO SE CREEN TABLAS EXTRAS COMO UPDATEAT...


    },
);
module.exports = Product;