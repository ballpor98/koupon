var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var compression = require('compression');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

var coupon = new Map();

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var app = express();
// helmet middleware
app.use(helmet());
// gzip compression middleware
app.use(compression());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.get('/', (req, res) => res.render('pages/index'))
app.use('/', indexRouter);
//app.post('/api', (req, res) => res.json(obj))
app.use('/api', apiRouter);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app;
/*
  {
  "line": {
    "type": "image",
    "originalContentUrl": "https://t3.ftcdn.net/jpg/01/81/28/40/240_F_181284066_9LS4Jw1O3dKAQGcmF5BWP3Oeteug7p77.jpg",
    "previewImageUrl": "https://t3.ftcdn.net/jpg/01/81/28/40/240_F_181284066_9LS4Jw1O3dKAQGcmF5BWP3Oeteug7p77.jpg"
  }
}*/
