import { Sequelize } from "sequelize";

export const sequelizeInstance = new Sequelize('mysql://ugzbv0k4hegrjtlm:E9qrstxeCXSAACwuCy49@boxbhrbi24jbestnag4s-mysql.services.clever-cloud.com:3306/boxbhrbi24jbestnag4s');


export const testConnection=async()=>{

    try {
        sequelizeInstance.authenticate()
        .then(() => {
            console.log('Database testConnection has been established successfully.');
        })
        .catch(error => {
            console.error('Unable to connect to the database:', error);
        });
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

