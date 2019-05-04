const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClienteSchema = new mongoose.Schema({
    
    Nome_Cliente: {
        type: String,
        require: true,
    },
    Empresa:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Tipo_Licenca:{
        type: String,
        required: true,
    },
    Val_Licenca:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

ClienteSchema.plugin(mongoosePaginate);
mongoose.model('Cliente', ClienteSchema);
