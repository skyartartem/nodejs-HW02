const express = require("express");
const {
  contactAddSchema,
  updateFavoriteSchema,
} = require("../../schemas/contacts-schemas");
const { validateBody } = require("../../decorators");
const isValidId = require("../../widdlewares/isValidId");
const {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers");


const router = express.Router();

router.get("/", getAllContacts);

router.get("/:id", isValidId, getContactById);

router.post("/", validateBody(contactAddSchema), addContact);

router.delete("/:id", isValidId, removeContact);

router.put("/:id", isValidId, validateBody(contactAddSchema), updateContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
