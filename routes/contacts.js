var express = require('express');
var router = express.Router();
const contacts = require('../models/contacts')

router.get("/", function (req, res) {
	res.payload(contacts)
})

router.get("/favorite", function (req, res) {
	res.payload(contacts.filter(c => c.favorite))
})

module.exports = router;