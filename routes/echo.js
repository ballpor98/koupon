'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', function (req, res) {
  console.log(req.body);
  try {
    var data = {
      "fulfillmentText": "response",
      "fulfillmentMessages": [{
        "text": {
          "text": [[{ "type": 0, "speech": "textRes" }]]
        }
      }]
    };
    res.json({ data: data });
  } catch (err) {
    console.log(err);
  }
});
exports.default = router;
