const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema2 = new Schema({

  GroupId: {    
        type : String,
          required: true
      },
        

         Action: {    
           type : String,
             required: true
         },

        Reason: {    
          type : String,
            required: true
        },
        

})
 const Topic2 = mongoose.model("Topic2",topicSchema2 );

module.exports = Topic2;