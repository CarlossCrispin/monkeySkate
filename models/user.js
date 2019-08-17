const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
   
    marca : {
        type: String,
        required: true
    },
    
    detalles: {
        type: String,
        required: true
    },
    precio : {
        type: Number,
        required: true
    },
    editable : {
        type: Boolean,
        required: true
    }
});
//se crea un mocdelo llamado User utilizando el ezquema userschema
module.exports = mongoose.model('User', UserSchema);