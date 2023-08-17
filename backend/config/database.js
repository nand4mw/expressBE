//connection database
import Sequelize from "sequelize";
const db = new Sequelize("crud_db", "root", "Admin1850$", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
