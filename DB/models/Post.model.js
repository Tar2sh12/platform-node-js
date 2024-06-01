import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import User from "./User.model.js";

const Post =sequelizeInstance.define(
    'post',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false
        }

    }
)
console.log(sequelizeInstance.models);
User.hasMany(Post,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
    foreignKey:'auther'
});
Post.belongsTo(User,{
    foreignKey:'auther'
});
export default Post;