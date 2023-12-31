const express = require('express');
const router = express.Router();
const { getContact, createContact, getContactId, updateContact, deleteContact } = require("../Controllers/contactController");
const { validate } = require('../models/contactModel');

const validateToken = require('../middleware/validateTokenHandler')

router.use(validateToken);

router.route("/").get(getContact).post(createContact);;

router.route("/:id").get(getContactId).put(updateContact).delete(deleteContact);


module.exports = router;