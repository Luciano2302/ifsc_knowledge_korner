const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "O nome da instituição é obrigatório"]
    },
    institutionType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InstitutionType',
        required: [true, "O tipo da instituição é obrigatório"]
    }
});

const Institution = mongoose.model("Institution", institutionSchema);

module.exports = Institution;
