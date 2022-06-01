const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dmarks2Schema = new Schema({

Name:{type:String, required: true },
  
S1ID:{type:String},

 S1DMark1: {type : Number,}, S1DMark2: {type : Number,}, S1DMark3: {type : Number,}, S1DMark4: {type : Number,},
 S1DMark5: {type : Number,}, S1DTotal: {type : Number,}, DWeight: {type : Number,},S1DAllocatedMarks:{type : Number,},
 
 



        

})
 const Dmark2 = mongoose.model("Dmark2",dmarks2Schema );

module.exports = Dmark2;