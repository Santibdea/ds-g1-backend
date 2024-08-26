"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db/db"));
const sequelize_1 = require("sequelize");
const User = db_1.default.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: { type: sequelize_1.DataTypes.STRING, unique: true },
    name: { type: sequelize_1.DataTypes.STRING },
    lastname: { type: sequelize_1.DataTypes.STRING },
    fullname: { type: sequelize_1.DataTypes.STRING },
    address: { type: sequelize_1.DataTypes.STRING },
    state: { type: sequelize_1.DataTypes.STRING },
    password: { type: sequelize_1.DataTypes.STRING },
    phone: { type: sequelize_1.DataTypes.STRING },
    isActive: { type: sequelize_1.DataTypes.BOOLEAN },
    Rol_Name: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: 'rols',
            key: 'name'
        }
    }
}, {
    timestamps: true
});
exports.default = User;
//# sourceMappingURL=user.model.js.map