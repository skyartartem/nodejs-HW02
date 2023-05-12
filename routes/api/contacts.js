const express = require("express");
const { contactAddSchema } = require("../../schemas/contacts-schemas");
const { validateBody } = require("../../decorators");

const {
  getAllContacts,
  getContact,
  addCont,
  delCont,
  updateCont,
} = require("../../controllers");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", getContact);

router.post("/", validateBody(contactAddSchema), addCont);

router.delete("/:contactId", delCont);

router.put("/:contactId", validateBody(contactAddSchema), updateCont);

module.exports = router;
