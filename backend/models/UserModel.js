// BERISI STRUKTUR TABLE UNTUK MENGISI TABLE PADA DATABASE

import { Sequelize } from "sequelize";
import db from "../config/database";

const { dataType } = Sequelize;
const User = db.define(
  "users",
  {
    name: dataType.STRING,
    email: dataType.STRING,
    gender: dataType.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

// membuat fungsi untuk tabel ketika tidak dapat men generate ke database
(async () => {
  await db.sync();
})();
