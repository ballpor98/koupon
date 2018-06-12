var express = require('express');
const uuidv4 = require('uuid/v4');
var router = express.Router();

let obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  //console.log(req.body.queryResult.parameters);
  //var para = req.body.queryResult.parameters;
  //console.log(req.body.queryResult.parameters['shop-name']);
  let couponCode = uuidv4();
  coupon[couponCode] = req.body.queryResult.parameters['shop-name'];
  //console.log(coupon[couponCode]);
  obj.fulfillmentMessages[0].text.text[0] = String(coupon[couponCode]+" coupon Code: "+couponCode);
  obj.fulfillmentMessages[1].image.imageUri = "https://img.movavi.com/movavi.com.12/images/stock-photos/preview/7.png";
  //+req.body.parameters['shop-name']
  res.json(obj);
});

module.exports = router;
