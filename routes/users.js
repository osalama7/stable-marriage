let express = require('express');
let router = express.Router();

let Marriage = require('../services/src/stable-marriage');


/* GET users listing. */
router.get('/', function(req, res, next) {
  let result = Marriage.StableMarriage.doMarriage();
  console.log(result.stableMarriages[0]);
  res.status(200).send(result.stableMarriages);
});

module.exports = router;
