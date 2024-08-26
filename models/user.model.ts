
import db from "../db/db";
import { DataTypes } from "sequelize";
import Rols from "./rols.model";

const User = db.define('user', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {type: DataTypes.STRING, unique: true},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    fullname: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    state: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    isActive: {type: DataTypes.BOOLEAN},
    Rol_Name: {
        type: DataTypes.STRING,
        references: {
            model: 'rols',
            key: 'name'
        }
    }
    
},
{
    timestamps: true
}
);
export default User;
