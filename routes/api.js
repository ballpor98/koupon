var express = require('express');
const uuidv4 = require('uuid/v4');
var router = express.Router();

var obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  console.log(req.body.parameters['shop-name']);
  let couponCode = uuidv4();
  obj.fulfillmentMessages[0].text.text[0] = String("coupon"+couponCode);
  //+req.body.parameters['shop-name']
  res.json(obj);
});

module.exports = router;
