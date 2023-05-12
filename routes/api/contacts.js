const express = require("express");

const router = express.Router();
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

const {HttpError} = require("../../helpers")

router.get("/", async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error)
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const result = await getContactById(id);
    if (!result) {
      throw HttpError(404, `Contact with id:${id} not found`)
      // const error = new Error(`Contact with id:${id} not found`);
      // error.status = 404;
      // throw error;
      // return res
      //   .status(404)
      //   .json({ message: `Contact with id:${id} not found` });
    }
    res.json(result);
  } catch (error) {
    // const { status = 500, message = "Server error" } = error;
    // res.status(status).json({ message });
     next(error);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
