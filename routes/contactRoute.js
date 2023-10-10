const express = require('express');
const router = express.Router();
const { getContact, createContact, getContactId, updateContact, deleteContact } = require("../Controllers/contactController")

router.route("/").get(getContact).post(createContact);;

router.route("/:id").get(getContactId).put(updateContact).delete(deleteContact);


module.exports = router;