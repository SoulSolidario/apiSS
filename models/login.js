// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema - Colections DB
var loginSchema = new Schema({
            'email': String,
            'login': String,
            'senha': String
});

// Return model - Schema
module.exports = mongoose.model('Login', loginSchema);
