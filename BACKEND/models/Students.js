const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    groupId:{
        type : String,
        required : true
    },

    groupName:{
        type : String,
        required : true
    },
    totalMembers:{
        type : String,
        required : true
    },


    leaderId:{
        type : String,
        required : true
    },
    member1Id:{
        type : String,
        required : true
    },
    member2Id:{
        type : String,
        required : true
    },
    member3Id:{
        type : String,
        required : true
    },

    
    phone: {
        type: String,
        required: true,
        match: /^(?:7|0|(?:\+94))[0-9]{9,10}$/
    },
    email: {
        type: String,
        required: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },


    researchTopic:{
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



module.exports = mongoose.model('Students',studentSchema)