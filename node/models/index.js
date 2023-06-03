import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from "../config/db.config.js";
import Sequelize from "sequelize";
const model=require("./init-models").default.default.initModels 
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  operatorsAliases: false,
  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle,
  },
});
const db = {};
db.categorie = model(sequelize).categorie; 
db.scategorie = model(sequelize).scategorie; 
db.article = model(sequelize).article;
db.login = model(sequelize).login;
db.sequelize = sequelize;
export default db;
