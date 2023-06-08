const express = require("express");
const { validateBody } = require("../../decorators");
const { schemas } = require("../../models/user");
const {
  register,
  login,
  verifyEmail,
  resendVerifyEmail,
  getCurrent,
  logout,
  updateAvatar,
} = require("../../controllers");
const authenticate = require("../../widdlewares/authenticate");
const upload = require("../../widdlewares/upload");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);
router.get("/verify/:verificationToken", verifyEmail);
router.post("/verify", validateBody(schemas.emailSchema), resendVerifyEmail);
router.post("/login", validateBody(schemas.loginSchema), login);
router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
