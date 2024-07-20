// import dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();

const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;
const DB_URL_LOCAL = process.env.DB_URL_LOCAL;
const DATABASE = process.env.DATABASE;

const JWT_SECRET = process.env.JWT_SECRET;
const EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

module.exports = {
  SERVER_HOST,
  SERVER_PORT,
  DB_URL_LOCAL,
  JWT_SECRET,
  EMAIL,
  EMAIL_PASSWORD,
  DATABASE,
};
