var express = require('express');
var router = express.Router();

var obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.json(obj);
});

module.exports = router;
