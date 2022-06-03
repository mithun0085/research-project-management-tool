const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({

    groupId:{
        type : String,
        required : true
    },

    researchField:{
        type : String,
        required : true
    },

    supervisorName:{
        type : String,
        required : true
    },

    dateRegistered: {
        type: Date,
        required: true
    }

})



module.exports = mongoose.model('Requests',requestSchema)