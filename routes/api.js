var express = require('express');
var router = express.Router();

var obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  res.json(obj);
});

module.exports = router;
