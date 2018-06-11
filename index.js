const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/',(req, res) => res.json('api/send'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
/*
{
"imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
"type": 3
}
{ "fulfillmentText": "testkub"}
*/
