var express = require('express');
const uuidv4 = require('uuid/v4');
var router = express.Router();

var obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  //console.log(req.body.queryResult.parameters);
  //var para = req.body.queryResult.parameters;
  //console.log(req.body.queryResult.parameters['shop-name']);
  let couponCode = uuidv4();
  coupon[couponCode] = req.body.queryResult.parameters['shop-name'];
  console.log(coupon[couponCode]);
  obj.fulfillmentMessages[0].text.text[0] = String("couponCodeIs: "+couponCode);
  //+req.body.parameters['shop-name']
  res.json(obj);
});

module.exports = router;
