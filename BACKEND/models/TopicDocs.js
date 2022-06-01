const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicDocSchema = new Schema({

  DocName: {    
        type : String,
          required: true
      },
    
   Action: {    
          type : String,
       
        },

       Reason: {    
         type : String,
         
       }

      

        

})
 const TopicDoc = mongoose.model("TopicDoc",topicDocSchema );

module.exports = TopicDoc;