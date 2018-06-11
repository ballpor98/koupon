var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var compression = require('compression');
const PORT = process.env.PORT || 5000

var obj = require("./api/send.json");

var app = express();
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/index'))
  app.post('/api',(req, res) => res.json(obj))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  /*
  {
  "line": {
    "type": "image",
    "originalContentUrl": "https://t3.ftcdn.net/jpg/01/81/28/40/240_F_181284066_9LS4Jw1O3dKAQGcmF5BWP3Oeteug7p77.jpg",
    "previewImageUrl": "https://t3.ftcdn.net/jpg/01/81/28/40/240_F_181284066_9LS4Jw1O3dKAQGcmF5BWP3Oeteug7p77.jpg"
  }
}*/
