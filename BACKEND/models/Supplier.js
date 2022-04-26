const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    s_name:{
        type : String,
        required : true
    },

    s_id:{
        type : Number,
        required : true
    },

    nic:{
        type : String,
        required : true
    },

    phone:{
        type : Number,
        required : true
    },

    email:{
        type : String,
        required : true
    },

    i_code:{
        type : Number,
        required : true
    }
  
  

})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;