const { DataTypes, Model } = require('sequelize');
const sequelize = require("./../conection");

class Client extends Model { }

Client.init(
    {
        //DATOS DE LA TABLA
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, },
        nombre: DataTypes.STRING,
        direccion: DataTypes.STRING,
        fecha_nacimiento: DataTypes.DATE,
    },
    {

        sequelize, //CONEXION
        //freezeTableName: true, //PARA TENER EL NOMBRE QUE QUERAMOS EN LA TABLA
        modelName: 'Client', // NOMBRE DE LA TABLA QUE SE LE AÑADIRA S
        //lOS CAMPOS SON "ÚTILES" MEJOR DEJARLOS
        // timestamps: false,//PARA QUE NO SE CREEN TABLAS EXTRAS COMO UPDATEAT...


    },
);
module.exports = Client;