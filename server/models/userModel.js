const mongoose =require( "mongoose");
const validator =require( "validator");
const bcrypt =require( "bcrypt");
const crypto =require( "crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "your name is required"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: [true, "Email is already used "],
    lowerCase: true,
    validate: [validator.isEmail, "Please provide a valid Email Address"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "password must have a minimum of 8 characters"],
    validate: {
      //by reg expression check the password is strong
      validator: function (el) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          el
        );
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password"],
    validate: {
      //confirm password
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  status: {
    type: String,
    enum: ["active", "deactivated"],
    default: "active",
  },
  passwordResetExpires: Date,
  passwordResetOtp: String,
});
// Pre-save middleware to hash the password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  // this.password = await bcrypt.hash(this.password, 12); //cost factor (salt)=12
  this.passwordConfirm = undefined; //not saved to the data-base
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
