const express = require('express');
const router = express.Router();

router.ws('/', function (ws, req) {
	ws.on('message', function (msg) {
		ws.send(msg)
	})
})

module.exports = router;