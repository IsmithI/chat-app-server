var express = require("express");
var router = express.Router();
const usersRouter = require("./users");
const chatsRouter = require("./chats");
const contactsRouter = require("./contacts");

router.use("/users", usersRouter);
router.use("/chats", chatsRouter);
router.use("/contacts", contactsRouter);

module.exports = router;
