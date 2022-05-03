const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

        Paymentid:{
            type:String,
            required:true
        },
        

        

         Price1: {    
            type : Number,
            required: true
        },
        Quantity1:{
            type : Number,
            required: true
        },
        Amount1: {
            type: Number,
            
        },


        Price2: {    
            type : Number,
           
        },
        Quantity2:{
            type : Number,
           
        },
        Amount2: {
            type: Number,
            
        },




        Price3: {    
            type : Number,
            
        },
        Quantity3:{
            type : Number,
            
        },
        Amount3: {
            type: Number,
            
        },


        Price4: {    
            type : Number,
            
        },
        Quantity4:{
            type : Number,
            
        },
        Amount4: {
            type: Number,
            
        },


        Price5: {    
            type : Number,
            
        },
        Quantity5:{
            type : Number,
            
        },
        Amount5: {
            type: Number,
            
        },



        Price6: {    
            type : Number,
           
        },
        Quantity6:{
            type : Number,
            
        },
        Amount6: {
            type: Number,
            
        },


        Total: {
            type : Number,
           
        },

       
       

})
 const SupplierPayment = mongoose.model("SupplierPayment",supplierSchema );

module.exports = SupplierPayment;