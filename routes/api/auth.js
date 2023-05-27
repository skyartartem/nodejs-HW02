const express = require("express");
const { validateBody } = require("../../decorators");
const { schemas } = require("../../models/user");
const { register, login, getCurrent, logout } = require("../../controllers");
const authenticate = require("../../widdlewares/authenticate");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);
router.post("/login", validateBody(schemas.loginSchema), login);
router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout)

module.exports = router