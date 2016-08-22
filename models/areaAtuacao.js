// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema - Colections DB
var AreaAtuacaoSchema = new Schema({
            nome: String,
            descricao: String
});

// Return model - Schema
module.exports = mongoose.model('AreaAtuacao', AreaAtuacaoSchema);
