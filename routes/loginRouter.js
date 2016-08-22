var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');

router.post('/', function(req, res){
        var email = req.body.email;
        var login = req.body.login;
        var senha = req.body.password;

        console.log(req);


        loginController.save(email, login, senha, function(resp){
                res.json(resp);
        })
});

router.get('/', function(req, res){
	loginController.list(function(resp){
		res.json(resp);
	})
});

module.exports = router;