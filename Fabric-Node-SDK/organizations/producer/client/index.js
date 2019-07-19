var express = require('express');
var router = express.Router();
let appRoot = require('app-root-path');
let createUser = require(`${appRoot}/fabric/createUser.js`);


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("GET request from '/'");
});

router.post('/', async function(req, res, next) {
  res.send("POST request from '/'");
})

module.exports = router;