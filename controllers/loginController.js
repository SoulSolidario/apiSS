var Login = require('../models/login');

exports.save = function(email, login, senha, callback){
            new Login({
                    'email': email,
                    'login': login,
                    'senha': senha
            }).save(function(error){
                    if(error){
                            callback({error: 'Não foi possível salvar'});
                    }else{
                            callback({resposta: 'Salvo com sucesso!'});
                    }
            });
}

exports.list = function(callback){
    Login.find({}, function(error, login){
        if(error){
            callback({error: 'Não encontramos logins'});
        }else{
            callback(login);
        }
    });
}