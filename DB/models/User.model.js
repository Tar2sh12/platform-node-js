import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
const User =sequelizeInstance.define(
    'User',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
) 

console.log(sequelizeInstance.models);
export default User;