const uuidv4 = require('uuid/v4');
var router = express.Router();

var obj = require("../api/send.json");

router.post('/', function(req, res, next) {
  console.log(req.body);
  let couponCode = uuidv4();
  obj.fulfillmentMessages[0].text.text = String(couponCode);
  res.json(obj);
});

module.exports = router;
