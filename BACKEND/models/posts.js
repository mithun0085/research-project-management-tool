const mongoose =  require('mongoose');//

const postSchema = new mongoose.Schema({
    year:{
        type:String,
        required:true
    },
    Jan:{
        type:Number
    },
    Feb:{
        type:Number
    },
    Mar:{
        type:Number
    },
    Apr:{
        type:Number
    },
    May:{
        type:Number
    },
    Jun:{
        type:Number
    },
    Jul:{
        type:Number
    },
    Aug:{
        type:Number
    },
    Sep:{
        type:Number
    },
    Oct:{
        type:Number
    },
    Nov:{
        type:Number
    },
    Dec:{
        type:Number
    }


});

module.exports = mongoose.model('sales',postSchema);


//all ok