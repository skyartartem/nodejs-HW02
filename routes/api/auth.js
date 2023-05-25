const express = require("express");
const { validateBody } = require("../../decorators");
const { schemas } = require("../../models/user");
const { register } = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

module.exports = router