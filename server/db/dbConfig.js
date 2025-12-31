import mysql2 from "mysql2/promise";
import express from "express";
const app = express();

const dbConnection = mysql2.createPool({
  host: "localhost",
  user: "evangadi-forum",
  password: "123456",
  database: "evangadi-forum-DB",
  connectionLimit: 11,
});

export default dbConnection;