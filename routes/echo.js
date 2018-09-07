var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log(req.body);
    var data = {
      "fulfillmentText": "response",
      "fulfillmentMessages": [{
        "text": {
          "text": [[{ "type": 0, "speech": "textRes" }]]
        }
      }]
    };
    res.json({ data: data });
});

module.exports = router;
