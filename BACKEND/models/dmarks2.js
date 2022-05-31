const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dmarks2Schema = new Schema({

Name:{type:String, required: true },
  
S1ID:{type:String},S2ID:{type:String},S3ID:{type:String},S4ID:{type:String},S5ID:{type:String},

 S1DMark1: {type : Number,}, S1DMark2: {type : Number,}, S1DMark3: {type : Number,}, S1DMark4: {type : Number,},
 S1DMark5: {type : Number,}, S1DTotal: {type : Number,}, DWeight: {type : Number,},S1DAllocatedMarks:{type : Number,},
 
 S2DMark1: {type : Number,}, S2DMark2: {type : Number,}, S2DMark3: {type : Number,}, S2DMark4: {type : Number,},
 S2DMark5: {type : Number,}, S2DTotal: {type : Number,}, S2DAllocatedMarks:{type : Number,},
 
 S3DMark1: {type : Number,}, S3DMark2: {type : Number,}, S3DMark3: {type : Number,}, S3DMark4: {type : Number,},
 S3DMark5: {type : Number,}, S3DTotal: {type : Number,}, S3DAllocatedMarks:{type : Number,},
        
            
 S4DMark1: {type : Number,}, S4DMark2: {type : Number,}, S4DMark3: {type : Number,}, S4DMark4: {type : Number,},
 S4DMark5: {type : Number,}, S4DTotal: {type : Number,}, S4DAllocatedMarks:{type : Number,},
            
 S5DMark1: {type : Number,}, S5DMark2: {type : Number,}, S5DMark3: {type : Number,}, S5DMark4: {type : Number,},
 S5DMark5: {type : Number,}, S5DTotal: {type : Number,},S5DAllocatedMarks:{type : Number,}



        

})
 const Dmark2 = mongoose.model("Dmark2",dmarks2Schema );

module.exports = Dmark2;