const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({

    Paymentid: {
        type : String,
        required: true
    },

    Basicsalary: {
        type : Number,
        required: true
    },


    OT:{
        type : Number,
        required: true
    },
    Vehicleallowance: {
        type: Number,
        required: true
    },
    
    Bonus:{
        type : Number,
        required: true
    },
    Insurance: {
        type: Number,
        required: true
    },
    Transport: {
        type: Number,
        
    },
    Netsalary: {
        type: Number,
        
    }

});


module.exports = mongoose.model("EmployeePayment",employeeSchema )