const mongoose =  require('mongoose');//

const empSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    jobPosition:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('emps',empSchema);