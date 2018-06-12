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
  //obj.fulfillmentMessages[1].image.imageUri = "https://kouponcoin.herokuapp.com/api/"+couponCode;
  //+req.body.parameters['shop-name']
  obj.fulfillmentMessages[1].image.imageUri = "http://chart.googleapis.com/chart?cht=qr&chs=240x240&choe=UTF-8&chld=L|0&chl=8241bd2c-a336-4ffb-8cd2-d9b90bd10467";
  res.json(obj);
});
router.get('/:id', function(req, res) {
    var id = req.params.id
    var qrcode = req.qrcode();
    qrcode.setDimension(240,240);
    qrcode.setCharset('UTF-8');
    //qrcode.setCharset('UTF-8');
    qrcode.setCorrectionLevel('L',0);
    qrcode.setData(id);
    var image = qrcode.getImage();
  res.render('pages/image', { title: 'Express',img:image });
});

module.exports = router;
