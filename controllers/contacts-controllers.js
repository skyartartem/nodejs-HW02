
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
      throw HttpError(404, `Contact with id:${id} not found`);
    }
    res.json(result);
};

const addCont = async (req, res) => {
    const result = await addContact(req.body);
    res.status(201).json(result);
};

const delCont = async (req, res) => {
    const id = req.params.contactId;
    const result = await removeContact(id);
    if (!result) {
      throw HttpError(404, `Contact with id:${id} not found`);
    }
    res.json({
      message: `Object with name:${result.name} Delete success`,
    });
};

const updateCont = async (req, res) => {
    // const { body } = req;
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, `Contact with id:${contactId} not found`);
    }
    res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContact: ctrlWrapper(getContact),
  addCont: ctrlWrapper(addCont),
  delCont: ctrlWrapper(delCont),
  updateCont: ctrlWrapper(updateCont),
};
