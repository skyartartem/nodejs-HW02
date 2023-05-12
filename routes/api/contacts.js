const express = require('express')

const router = express.Router()
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");

router.get('/', async (req, res, next) => {
  const result = await listContacts()
  res.json(result)
})

router.get('/:contactId', async (req, res, next) => {
  const id = req.params.contactId;
  const result = await getContactById(id);
  res.json(result);
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
