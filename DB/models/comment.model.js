import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import User from "./User.model.js";
import Post from "./Post.model.js";
const comment =sequelizeInstance.define(
    'comment',
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false
        }

    }
)
console.log(sequelizeInstance.models);
User.hasMany(comment,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
});
comment.belongsTo(User);

Post.hasMany(comment,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
});
comment.belongsTo(Post);
export default comment;