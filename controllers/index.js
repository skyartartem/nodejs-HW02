const contactsControllers = require("./contacts-controllers");
const registerControllers = require("./auth");

module.exports = {
  ...contactsControllers,
  ...registerControllers,
};