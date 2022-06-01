const express = require('express');
const Dmarks2 = require('../models/dmarks2');


const router = express.Router();


router.post('/dmark2/save',(req,res)=>{ 
    let newDmark2 = new Dmarks2(req.body); 
    newDmark2 .save((err) =>{    
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


router.get('/dmarks2',(req,res) =>{ 
    Dmarks2.find().exec((err,dmarks2) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingDmarks2:dmarks2
        });
        });
    });


router.get('/dmark2/:id',(req,res)=>{ 
        let DmarkID = req.params.id; 
        Dmarks2.findById(DmarkID,(err,dmark2)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
              dmark2
            });
        });
    });

    
   
    router.put('/dmark2/update/:id',(req,res)=>{ 
         Dmarks2.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,dmark2)=>{ 
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

    




   
    router.delete('/dmark2/delete/:id', (req,res)=>{ 
        Dmarks2.findByIdAndRemove(req.params.id).exec((err,deleteDmark2)=>{ 
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deleteDmark2

            });
        });
    });


module.exports = router; 
