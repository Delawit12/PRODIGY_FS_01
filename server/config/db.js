// import mongoose from "mongoose";
const mongoose = require("mongoose");

const { DB_URL_LOCAL, DATABASE } = require("./secrets.js");

const connection = async () => {
  try {
    // console.log(DATABASE);
    const conn = await mongoose.connect(DATABASE);
    // console.log(conn);
    console.log("DB connection successful !!!");
  } catch (error) {
    console.log("Failed to connect to DB deriver", error);
  }
};

module.exports = connection;
