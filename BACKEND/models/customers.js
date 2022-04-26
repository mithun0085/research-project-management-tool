const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    Customername: {    
        type : String,
          required: true
      },
        

         Customerid: {    
           type : String,
             required: true
         },

        


         Cartid: {    
            type : String,
            required: true
         },
        
        Total: {
            type: Number,
            required:true
        },

})
 const CustomerPayment = mongoose.model("CustomerPayment",customerSchema );

module.exports = CustomerPayment;