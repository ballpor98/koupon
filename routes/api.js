var express = require('express');
const uuidv4 = require('uuid/v4');
var QRCode = require('qrcode');
var router = express.Router();

let obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  //parameters
  //req.body.queryResult.parameters['shop-name']
  let couponCode = uuidv4();
  QRCode.toDataURL(couponCode, function (err, url) {
    coupon[couponCode] = url;
})
  obj.fulfillmentMessages[0].text.text[0] = String("coupon Code: "+couponCode);
  //toDataURL(text, [options], [cb(error, url)])
  obj.fulfillmentMessages[1].image.imageUri = "https://kouponcoin.herokuapp.com/api/"+couponCode;
  res.json(obj);
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    console.log("ID: "+id);
  res.render(coupon[id]);
});
/*
var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  rendererOpts: {
    quality: 0.3
  }
}

QRCode.toDataURL('text', opts, function (err, url) {
  if (err) throw err

  var img = document.getElementById('image')
  img.src = url
})
*/

module.exports = router;
