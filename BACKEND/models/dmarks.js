const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dmarksSchema = new Schema({

DDescription1: {type : String, }, DDescription2: {type : String, }, DDescription3: {type : String, }, 
DDescription4: {type : String, },DDescription5: {type : String, }, Name:{type:String, required: true },
  
 DMark1: {type : Number,}, DMark2: {type : Number,}, DMark3: {type : Number,}, DMark4: {type : Number,},
 DMark5: {type : Number,}, DTotal: {type : Number,}, DWeight: {type : Number,},DAllocatedMarks:{type : Number,}
 

 

        
            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            



        

})
 const Dmark = mongoose.model("Dmark",dmarksSchema );

module.exports = Dmark;