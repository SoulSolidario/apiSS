
var express = require('express');
var router = express.Router();

var areaAtuacaoController = require('../controllers/areaAtuacaoController');

router.post('/', function(req, res){
        var nome = req.body.nome;
        var descricao = req.body.descricao;

        console.log(req.body.email);
        areaAtuacaoController.save(nome, descricao, function(resp){
                res.json(resp);
        })
});

router.get('/', function(req, res){
	areaAtuacaoController.list(function(resp){
		res.json(resp);
	})
});

module.exports = router;