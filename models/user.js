const { Schema, model } = require("mongoose");
const { handleMongooseErrore } = require("../helpers");
const Joi = require("joi");
// const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
      //   match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseErrore);

const registerSchema = Joi.object({
  password: Joi.string()
    .min(minNum)
    .required()
    .messages({ "any.required": "missing required password field" }),
  email: Joi.string()
    // .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required email field" }),
  subscription: Joi.string().valid("starter", "pro", "business"),
  token: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string()
    .min(minNum)
    .required()
    .messages({ "any.required": "missing required password field" }),
  email: Joi.string()
    // .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required email field" }),
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
