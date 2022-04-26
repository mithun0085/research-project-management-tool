const express = require('express');
const Suppliers = require('../models/suppliers');

const router = express.Router();



router.post('/supplier/save',(req,res)=>{ 
    let newSupplier = new Suppliers(req.body); 
    newSupplier.save((err) =>{     
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



router.get('/supplierss',(req,res) =>{ 
    Suppliers.find().exec((err,supplier) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingPayments:supplier 
        });
        });
    });


  
    router.get('/payment/:id',(req,res)=>{ 
        let paymentID = req.params.id; 
        Suppliers.findById(paymentID,(err,supplier)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
                supplier
            });
        });
    });
    
    
   
    router.put('/payment/update/:id',(req,res)=>{ 
         Suppliers.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,supplier)=>{ 
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

    
    router.delete('/payment/delete/:id', (req,res)=>{ 
        Suppliers.findByIdAndRemove(req.params.id).exec((err,deletePayment)=>{ 
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deletePayment

            });
        });
    });


module.exports = router; 
