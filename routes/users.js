let express = require('express');
let router = express.Router();

let Marriage = require('../services/src/stable-marriage');


/* GET users listing. */
router.get('/', function(req, res, next) {
  let result = Marriage.StableMarriage.doMarriage();
  res.status(200).send(result);
});

module.exports = router;
