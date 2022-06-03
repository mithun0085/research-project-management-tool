const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dmarks2Schema = new Schema({

Name:{type:String, required: true },DWeight: {type : Number,},
  
S1ID:{type:String , required: true },S2ID:{type:String , required: true },S3ID:{type:String, required: true },S4ID:{type:String, required: true },

 S1DMark1: {type : Number,}, S1DMark2: {type : Number,}, S1DMark3: {type : Number,}, S1DMark4: {type : Number,},
 S1DMark5: {type : Number,}, S1DTotal: {type : Number,},S1DAllocatedMarks:{type : Number,},
 
 S2DMark1: {type : Number,}, S2DMark2: {type : Number,}, S2DMark3: {type : Number,}, S2DMark4: {type : Number,},
 S2DMark5: {type : Number,}, S2DTotal: {type : Number,}, S2DAllocatedMarks:{type : Number,},
 
 S3DMark1: {type : Number,}, S3DMark2: {type : Number,}, S3DMark3: {type : Number,}, S3DMark4: {type : Number,},
 S3DMark5: {type : Number,}, S3DTotal: {type : Number,}, S3DAllocatedMarks:{type : Number,},
        
            
 S4DMark1: {type : Number,}, S4DMark2: {type : Number,}, S4DMark3: {type : Number,}, S4DMark4: {type : Number,},
 S4DMark5: {type : Number,}, S4DTotal: {type : Number,}, S4DAllocatedMarks:{type : Number,}
            




        

})
 const Dmark2 = mongoose.model("Dmark2",dmarks2Schema );

module.exports = Dmark2;