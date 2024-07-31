const express = require("express");
const authController = require("../controllers/authController.js");
const userController = require("../controllers/userController.js");
const auth = require("../middleware/auth.js");
const isAdmin = require("../middleware/isAdmin.js");

const userRoute = express.Router();

userRoute.post("/signup", authController.signup);
userRoute.post("/login", authController.login);
userRoute.get("/logout", authController.logout);
userRoute.post("/forgetPassword", authController.forgetPassword);
userRoute.post("/confirmOtp", authController.otpVerification);
userRoute.put("/resetPassword", authController.resetPassword);

// routes require login
userRoute.patch("/updatePassword", auth, authController.updatePassword);

// routes require admin role
// userRoute.use(isAdmin);
userRoute.get("/getAllUser", auth, isAdmin, userController.getAllUser);
userRoute.get(
  "/getSingleUser/:id",
  auth,
  isAdmin,
  userController.getSingleUser
);
userRoute.patch("/updateUser/:id", auth, isAdmin, userController.updateUser);
userRoute.patch("/deleteUser/:id", auth, isAdmin, userController.deleteUser);

module.exports = userRoute;
