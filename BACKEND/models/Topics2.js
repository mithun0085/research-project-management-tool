const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema2 = new Schema({


        

      

        Reason: {    
          type : String,
          
        },
        

})
 const Topic2 = mongoose.model("Topic2",topicSchema2 );

module.exports = Topic2;