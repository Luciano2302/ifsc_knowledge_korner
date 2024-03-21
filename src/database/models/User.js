const mongoose = require('mongoose');

function User() {
    this.name = {
        type: String,
        required: [true, "O nome do(a) usuario(a) é obrigatório"]
    };
    this.status = {
        type: Boolean,
        required: true,
        default: true
    };
    this.dateBirth = {
        type: Date,
        required: [true, "A data de(a) nascimento do usuario(a) é obrigatório"]
    };
    this.email = {
        type: String,
        required: false
    };
    this.login = {
        type: String,
        required: [true, "O login do(a) usuario(a) é obrigatório"],
        unique: true
    };
    this.password = {
        type: String,
        required: [true, "O password do(a) usuario(a) é obrigatório"]
    };
}

module.exports = User;
