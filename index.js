const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var obj = require("./api/send.json");

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/',(req, res) => res.json(obj))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  /*
  {
  "line": {
    "type": "image",
    "originalContentUrl": "https://t3.ftcdn.net/jpg/01/81/28/40/240_F_181284066_9LS4Jw1O3dKAQGcmF5BWP3Oeteug7p77.jpg",
    "previewImageUrl": "https://t3.ftcdn.net/jpg/01/81/28/40/240_F_181284066_9LS4Jw1O3dKAQGcmF5BWP3Oeteug7p77.jpg"
  }
}*/
