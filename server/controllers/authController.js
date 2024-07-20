const User =require("../models/userModel.js") ;
const bcrypt =require("bcrypt") ;
const { JWT_SECRET } =require( "../config/secrets.js");
const jwt =require( "jsonwebtoken");
const Email =require( "../utils/email.js");
// const crypto =require("crypto");
const authController = {
  signup: async (req, res, next) => {
    console.log(req.body);
    try {
      const { name, email, password, passwordConfirm } = req.body;
      const newUser = await User.create({
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      });
      res.status(200).json({
        status: "success",
        data: {
          user: newUser,
        },
        message: "User register  successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "Failed",
        message: "An error occurred while creating the user",
        error: error.message,
      });
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // check email and password are provided
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "email or password is not provided",
        });
      }
      // check the email already exist
      const user = await User.findOne({ email }).select("+password");
      console.log("user", user);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "No account exists with this email",
        });
      }

      // check the user is an active user
      if (user.status === "deactivated") {
        return res.status(403).json({
          success: false,
          message: "Your account has been deactivated. Please contact support ",
        });
      }
      // check the password is the same

      const dbPassword = user.password;
      // console.log(dbPassword);
      const isMatch = bcrypt.compareSync(password, dbPassword);
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });
      }
      //  remove the password =require() view
      user.password = undefined;

      const id = user._id;
      const role = user.role;
      // generate token
      const token = jwt.sign({ id, email, role }, JWT_SECRET); // there is also expire time as a third value
      console.log(token);

      // login response
      res.status(200).json({
        status: "success",
        token,
        data: {
          user,
        },
        message: "Login successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "Failed",
        message: "An error occurred while login a user",
      });
    }
  },
  logout: async (req, res, next) => {
    try {
      res.cookie("jwt", "loggedout", {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
      });

      // response
      res.status(200).json({ status: "success" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "Failed",
        message: "An error occurred while logout a user",
      });
    }
  },

  forgetPassword: async (req, res, next) => {
    try {
      const { email } = req.body;
      // Get the user by using the provided email
      const user = await User.findOne({ email });
      console.log("User found:", user);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "No user found with that email address.",
        });
      }

      // Generate a random OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      user.passwordResetOtp = otp;
      console.log("otp", otp);
      user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
      await user.save({ validateBeforeSave: false });

      try {
        await Email(user.email, otp);
        res.status(200).json({
          status: "success",
          message: "OTP sent to email!",
        });
      } catch (err) {
        console.error("Error sending OTP email:", err);
        user.passwordResetOtp = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });
        return res.status(500).json({
          success: false,
          message: "There was an error sending the OTP. Try again later.",
        });
      }
    } catch (error) {
      console.error("Error in forgetPassword:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your request.",
      });
    }
  },

  resetPassword: async (req, res, next) => {
    try {
      // Get the email , otp and password
      const { email, otp, password, passwordConfirm } = req.body;

      const user = await User.findOne({ email });
      console.log("user", user);
      if (
        !user ||
        user.passwordResetOtp !== otp ||
        user.passwordResetExpires < Date.now()
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired OTP. Please request a new OTP.",
        });
      }
      // Update user's password
      user.password = password;
      user.passwordConfirm = passwordConfirm;
      user.passwordResetOtp = undefined;
      user.passwordResetExpires = undefined;

      await user.save();

      res.status(200).json({
        status: "success",
        message: "Password reset successfully.",
      });
    } catch (error) {
      console.error("Error in resetPassword:", error);
      console.log("Error in resetPassword:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing resetPassword.",
        error: error.message,
      });
    }
  },
  updatePassword: async (req, res, next) => {
    try {
      // const id = req.body.id;
      const { id, email, password, passwordConfirm } = req.body;
      // all are required
      if (!id || !email || !password || !passwordConfirm) {
        return res.status(400).json({
          success: false,
          message: "All fields are required ",
        });
      }

      // get user data by email with the password too
      const user = await User.findOne({ email }).select("+password");
      // console.log("user", user);

      //  compare the db password with the provided one
      const storedPassword = user.password;
      const isSame = await bcrypt.compare(password, storedPassword);

      // check previously used or not
      if (isSame) {
        return res.status(400).json({
          success: false,
          message: "Password previously used",
        });
      }
      // if is not previously used , update the password
      user.password = req.body.password;
      user.passwordConfirm = req.body.passwordConfirm;

      await user.save();

      user.password = undefined;
      // console.log("user", user);

      res.status(200).json({
        status: "success",
        message: "Password updated successfully",
      });
    } catch (error) {
      console.error("Error in updatePassword:", error);
      console.log("Error in updatePassword:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing updatePassword.",
        error: error.message,
      });
    }
  },
};
module.exports = authController;
