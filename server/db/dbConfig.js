import mysql2 from "mysql2/promise";
import express from "express";
const app = express();

const dbConnection = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 11,
});

export default dbConnection;
