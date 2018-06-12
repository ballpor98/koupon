var express = require('express');
const uuidv4 = require('uuid/v4');
var router = express.Router();

let obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  //parameters
  //req.body.queryResult.parameters['shop-name']
  let couponCode = uuidv4();
  coupon[couponCode] = true;
  obj.fulfillmentMessages[0].text.text[0] = String("coupon Code: "+couponCode);
  //toDataURL(text, [options], [cb(error, url)])
  //obj.fulfillmentMessages[1].image.imageUri = "https://kouponcoin.herokuapp.com/api/"+couponCode;
  res.json(obj);
});
/*
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
*/
module.exports = router;
