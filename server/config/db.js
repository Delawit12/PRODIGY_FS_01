// import mongoose from "mongoose";
const mongoose = require("mongoose");

const { MONGODB_URI } = require("./secrets.js");

const connection = async () => {
  try {
    // console.log(DATABASE);
    const conn = await mongoose.connect(MONGODB_URI);
    // console.log(conn);
    console.log("DB connection successful !!!");
  } catch (error) {
    console.log("Failed to connect to DB deriver", error);
  }
};

module.exports = connection;
