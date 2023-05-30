const express = require("express");
const {
  contactAddSchema,
  updateFavoriteSchema,
} = require("../../schemas/contacts-schemas");
const { validateBody, validateFavorite } = require("../../decorators");
const isValidId = require("../../widdlewares/isValidId");
const authenticate = require("../../widdlewares/authenticate");
const {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers");



const router = express.Router();

router.get("/", authenticate, getAllContacts);

router.get("/:id", authenticate, isValidId, getContactById);

router.post("/", authenticate, validateBody(contactAddSchema), addContact);

router.delete("/:id", authenticate, isValidId, removeContact);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(contactAddSchema),
  updateContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateFavorite(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
