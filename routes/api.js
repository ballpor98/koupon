var express = require('express');
var router = express.Router();

var obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  var data = req.body;
  console.log(data);
  res.json(obj);
});

module.exports = router;
