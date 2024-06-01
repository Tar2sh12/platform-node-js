import { Sequelize } from "sequelize";

export const sequelizeInstance = new Sequelize('platform', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


export const testConnection=async()=>{
    try {
        await sequelizeInstance.authenticate();
        console.log('testConnection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export const dbConnection=async()=>{
    try {
        await sequelizeInstance.sync({alter:true});
        console.log('dbConnection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

