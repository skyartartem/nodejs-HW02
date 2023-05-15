
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

const { HttpError } = require("../helpers");


const {ctrlWrapper} = require("../decorators")

const getAllContacts = async (req, res) => {
    const result = await listContacts();
    res.json(result);
};

const getContact = async (req, res) => {
    const id = req.params.contactId;
    const result = await getContactById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
};

const delCont = async (req, res) => {
    const id = req.params.contactId;
    const result = await removeContact(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({
      message: "contact deleted",
    });
};

const addCont = async (req, res) => {
    const result = await addContact(req.body);
    res.status(201).json(result);
};

const updateCont = async (req, res) => {
    // const { body } = req;
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContact: ctrlWrapper(getContact),
  delCont: ctrlWrapper(delCont),
  addCont: ctrlWrapper(addCont),
  updateCont: ctrlWrapper(updateCont),
};
