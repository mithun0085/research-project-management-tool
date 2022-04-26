const express = require('express');//
const Suppliers = require('../models/Supplier');//

const router = express.Router();//


//save supplier(insert)
router.post('/suppliers/save',(req,res)=>{ //
    let newSupplier = new Suppliers(req.body); //
    newSupplier.save((err) =>{     //
         if(err){ //
              return res.status(400).json({ //
                  error:err //
              });
         }
         return res.status(200).json({ 
             success:"details saved successfully"  //j
         });
    });



});

//get supplier details

router.get('/suppliers',(req,res) =>{ //
    Suppliers.find().exec((err,suppliers) =>{ //
        if(err){ //
            return res.status(400).json({
                error:err //print error

            });
        }
        return res.status(200).json({
            success:true, //
            existingSuppliers:suppliers //
        });
        });
    });
    
    //get supplier
    router.get('/suppliers/:id',(req,res)=>{ 
        let supplierID = req.params.id; //
        Suppliers.findById(supplierID,(err,supplier)=>{ //
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

    //update supplier
    router.put('/suppliers/update/:id',(req,res)=>{ //
        Suppliers.findByIdAndUpdate( //
             req.params.id, //
             {
                 $set:req.body //

             },
             (err,supplierSchema)=>{ //
                 if(err){  //
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

    //delete salaries
    router.delete('/suppliers/delete/:id', (req,res)=>{ //
        Suppliers.findByIdAndRemove(req.params.id).exec((err,deleteSupplier)=>{ //
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deleteSupplier

            });
        });
    });


module.exports = router; //