const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O nome do(a) usuário(a) é obrigatório"]
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    dateBirth: {
        type: Date,
        required: [true, "A data de nascimento do usuário(a) é obrigatória"]
    },
    email: {
        type: String,
        required: false
    },
    login: {
        type: String,
        required: [true, "O login do(a) usuário(a) é obrigatório"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "A senha do(a) usuário(a) é obrigatória"]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
