var express = require('express');
const url = require('url');
var router = express.Router();
const querystring = require('querystring');

let alert = require('alert');
/* GET my data page. */
router.get('/', function(req, res, next) {
    var s = req.query.value;
    res.send('tanh applied to: ' + s + " is " + Math.tanh(s));
});


module.exports = router;