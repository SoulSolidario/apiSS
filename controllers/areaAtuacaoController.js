var AreaAtuacao = require('../models/areaAtuacao');

exports.save = function(nome, descricao, callback){
            new AreaAtuacao({
                    'nome': nome,
                    'descricao': descricao
            }).save(function(error){
                    if(error){
                            callback({error: 'Não foi possível salvar'});
                    }else{
                            callback({resposta: 'Salvo com sucesso!'});
                    }
            })
}