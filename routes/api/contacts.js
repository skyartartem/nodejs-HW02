const express = require("express");
const { contactAddSchema } = require("../../schemas/contacts-schemas");
const { validateBody } = require("../../decorators");
const isValidId = require("../../widdlewares/isValidId");
const {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../controllers");


const router = express.Router();

router.get("/", getAllContacts);

router.get("/:id", isValidId, getContactById);

router.post("/", validateBody(contactAddSchema), addContact);

router.delete("/:id", isValidId, removeContact);

router.put("/:id", isValidId, validateBody(contactAddSchema), updateContact);

module.exports = router;
