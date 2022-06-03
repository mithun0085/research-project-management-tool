const mongoose = require('mongoose');

const emarkSchema = mongoose.Schema({

    groupID: {
        type : String,
        required: true
    },

    
    Emark1: {
        type : Number,
        required: true
    },

    Emark2: {
        type : Number,
        required: true
    },


    Emark3:{
        type : Number,
        required: true
    },
    Emark4: {
        type: Number,
        required: true
    },
    
    Emark5:{
        type : Number,
        required: true
    },
    TotalEmark: {
        type: Number,
        required: true
    },
    
});


module.exports = mongoose.model("Emark",emarkSchema )


       