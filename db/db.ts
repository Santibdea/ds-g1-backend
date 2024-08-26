import { Sequelize } from 'sequelize';

let db: Sequelize;

const db_name: string = process.env.DB_NAME || 'TastyDoughsDB';
const user: string = process.env.DB_USER || 'postgres';
const password: string = process.env.DB_PASSWORD || 'admin';
const host: string = process.env.DB_HOST || 'localhost';

// const user: string = process.env.DB_USER || 'admindb';
// const password: string = process.env.DB_PASSWORD || '36VEfazeki';


try {

    
    db = new Sequelize(db_name, user, password, {
        host, dialect: 'postgres',
        dialectOptions: {
            useUTC: false, // -->Add this line. for reading from database
        },
        timezone: "+05:30"
    });  
} catch (error) {
    throw new Error("No se pudo conectar con la base de datos")
}

export default db;     