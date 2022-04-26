const express = require('express');
const Customers = require('../models/customers');

const router = express.Router();


router.post('/customer/save',(req,res)=>{ 
    let newCustomer = new Customers(req.body); 
    newCustomer.save((err) =>{    
         if(err){ 
              return res.status(400).json({ 
                  error:err 
              });
         }
         return res.status(200).json({ 
             success:"details saved successfully"  
         });
    });



});



router.get('/customers',(req,res) =>{ 
    Customers.find().exec((err,customer) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingPayments:customer 
        });
        });
    });


    router.get('/cpayment/:id',(req,res)=>{ 
        let paymentID = req.params.id; 
        Customers.findById(paymentID,(err,customer)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
                customer
            });
        });
    });
    
    
   
    router.put('/cpayment/update/:id',(req,res)=>{ 
         Customers.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,customer)=>{ 
                 if(err){  
                     return res.status(400).json({
                         error:err
                        });
                 }
                 return res.status(200).json({
                     success:"Updated Successfully"
                 });
             }
         );
    });

   
    router.delete('/cpayment/delete/:id', (req,res)=>{ 
        Customers.findByIdAndRemove(req.params.id).exec((err,deletePayment)=>{ 
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deletePayment

            });
        });
    });


module.exports = router; 
