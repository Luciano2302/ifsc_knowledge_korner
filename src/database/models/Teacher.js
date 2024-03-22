const mongoose = require('mongoose');
const User = require('/user.js');

const teacherSchema = new mongoose.Schema({
    registration: {
        type: Number,
        required: [true, "A matrícula do(a) professor(a) é obrigatória"],
        unique: true
    },
    titration: {
        type: String,
        required: [true, "A titulação do(a) professor(a) é obrigatória"]
    },
    institution: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution',
        required: [true, "A instituição do(a) professor(a) é obrigatória"]
    }
});

const Teacher = User.discriminator('Teacher', teacherSchema);

module.exports = Teacher;
