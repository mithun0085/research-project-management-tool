const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({

  GroupId: {    
        type : String,
          required: true
      },
        

         Topic1: {    
           type : String,
            
         },

         Action1: {    
          type : String,
       
        },

       Reason1: {    
         type : String,
         
       },

       Topic2: {    
        type : String,
          
      },

      Action2: {    
       type : String,
    
     },

    Reason2: {    
      type : String,
      
    },
    Topic3: {    
      type : String,
        
    },

    Action3: {    
     type : String,
  
   },

  Reason3: {    
    type : String,
    
  }

        

})
 const Topic = mongoose.model("Topic",topicSchema );

module.exports = Topic;