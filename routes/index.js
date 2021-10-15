var express = require('express');
var fetch = require('node-fetch');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    let rfid = req.query.rfid.substr(3)
    console.log(rfid)

  fetch(`http://anima.craos.net/condominio/pesquisamorador?autenticacao=eq.${rfid.toUpperCase()}`)
      .then(response => response.json())
      .then(response => {

          if (response !== undefined && response.length > 0){
              res.status(200).send("|")
          } else {
              res.status(404).send()
          }

          console.log(response)

      })

});

module.exports = router;
