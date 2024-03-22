const mongoose = require('mongoose');

const institutionTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O nome do tipo de instituição é obrigatório"],
        unique: true
    }
});

const InstitutionType = mongoose.model("InstitutionType", institutionTypeSchema);

module.exports = InstitutionType;
