var express = require('express');
var AuthService = require('../services/AuthService')
var router = express.Router();

var authService = new AuthService();


router.post('/', function (req, res) {
  const {
    email,
    password
  } = req.body;
  AuthService.login(email, password, id => {
    if(id==undefined)
    {
      res.status(400).json(id);
    } else{
      res.status(200).json(id);
    }
  });

});

router.put('/', function (req, res) {
  const {
    email,
    password,
    new_password
  } = req.body;
  AuthService.changePassword(email, password, new_password, result => {
    res.status(200).json(result)
  });

});


module.exports = router;