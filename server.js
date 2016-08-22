// Configuration files
var app = require('./config/app_config');
var db = require('./config/db_config');

// Intances of routes
var areas = require('./routes/areaAtuacaoRouter');
var login = require('./routes/loginRouter');

app.get('/', function(req, res){
    var ok = [{Bemvindo: 'API de Áreas de atuação de Organizações Sociais'},{
        hello: 'world',
        bomdia: {
            embreve: 'Documentação da API'
        },
        endereco: {
            numero: '111',
            logradouro: 'Rua Brasil',
            bairro: 'jardim camburi',
            cidade: 'Vitoria',
            pais: 'Brasil'
        },
        marca: 'SouSol'
    }];
    res.json(ok);
    //res.end('bem vindo!');
});

// Rotas
app.use('/areas', areas);
app.use('/login', login); 
