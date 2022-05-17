const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({

  GroupId: {    
        type : String,
          required: true
      },
        

         Topic: {    
           type : String,
             required: true
         },

        

})
 const Topic = mongoose.model("Topic",topicSchema );

module.exports = Topic;