const mongoose = require('mongoose');
const User = require('./User');

function Teacher() {
    const teacher = Object.create(User.prototype);
    teacher.registration = {
        type: Number,
        required: [true, "A matricula do(a) professor(a) é obrigatório"],
        unique: true
    };
    return teacher;
}

module.exports = Teacher;