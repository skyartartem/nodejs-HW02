const { Schema, model } = require("mongoose");
const { handleMongooseErrore } = require("../helpers");
const Joi = require("joi");
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const minNum = 4;

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: minNum,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseErrore);

const registerSchema = Joi.object({
  password: Joi.string().min(minNum).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
  token: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(minNum).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
