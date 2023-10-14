const mongoose = require('mongoose');
const {Schema} = mongoose;

const PacienteSchema = new Schema({
    name: {type:String, require:true},
    document: {type:Number, require:true},
    age: {type:Number, require:true},
    phone: {type:Number, require:true},
    birth: {type:Date, require:true},
    adress: {type:String, require:true},
    email: {type:String, require:true},
    eps: {type:String, require:true}
});

module.exports = mongoose.model('Paciente', PacienteSchema);
