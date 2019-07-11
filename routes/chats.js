var express = require("express");
var router = express.Router();

var chats = require("../models/chats");
var messages = require("../models/messages");
var users = require("../models/users");

router.get("/short", function(req, res) {
	return res.payload(
		chats.map(chat => ({
			...chat,
			users: undefined,
			lastMessage: lastMessage(chat),
		}))
	);
});

function lastMessage(chat) {
	const msg = messages.filter(m => m.chatId === chat.id);

	if (msg.length === 0) return null;

	return msg.reduce((acc, msg) => {
		return acc.sendDate > msg.sendDate ? acc : msg;
	});
}

module.exports = router;
