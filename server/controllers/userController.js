const User = require("../models/userModel.js");

const userController = {
  updateUser: async (req, res, next) => {
    try {
      const { role } = req.body;
      // get find the user by id from param and update
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { role: role },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log(user);
      if (!user) {
        return res.status(404).json({
          status: "Failed",
          message: "No data is  found with that ID",
        });
      }
      // send response
      return res.status(200).json({
        status: "success",
        data: {
          user: user,
        },
      });
    } catch (error) {
      console.log("Error in updating user:", error);
      return res.status(500).json({
        status: "Failed",
        message: "An error occurred while updating user",
      });
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      // get find the user by id from param and update
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { status: "deactivated" },
        {
          new: true,
          runValidators: true,
        }
      );
      console.log(user);
      if (!user) {
        return res.status(404).json({
          status: "Failed",
          message: "No data is  found with that ID",
        });
      }
      // send response
      return res.status(200).json({
        status: "success",
        data: {
          user: user,
        },
      });
    } catch (error) {
      console.log("Error in updating user:", error);
      return res.status(500).json({
        status: "Failed",
        message: "An error occurred while updating user",
      });
    }
  },
  getAllUser: async (req, res, next) => {
    try {
      // find all users
      const users = await User.find();
      // send response
      return res.status(200).json({
        status: "success",
        size: users.length,
        data: {
          users: users,
        },
      });
    } catch (error) {
      console.log("Error in fetching users:", error);
      return res.status(500).json({
        status: "Failed",
        message: "An error occurred while fetching all  users",
      });
    }
  },
  getSingleUser: async (req, res, next) => {
    try {
      // find a user by using id
      console.log(req.params.id);
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({
          status: "Failed",
          message: "No user found with that ID",
        });
      }
      // send response
      return res.status(200).json({
        status: "success",
        size: user.length,
        data: {
          user: user,
        },
      });
    } catch (error) {
      console.log("Error in fetching user:", error);
      return res.status(500).json({
        status: "Failed",
        message: "An error occurred while fetching  user",
      });
    }
  },
};
module.exports = userController;
