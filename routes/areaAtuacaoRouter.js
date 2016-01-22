
var express = require('express');
var router = express.Router();
var areaAtuacaoController = require('../controllers/areaAtuacaoController');

router.post('/', function(req, res){
        var nome = req.body.nome;
        var descricao = req.body.descricao;

        areaAtuacaoController.save(nome, descricao, function(resp){
                res.json(resp);
        })
});

module.exports = router;