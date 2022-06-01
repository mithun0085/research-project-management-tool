const express = require('express');
const Dmarks = require('../models/dmarks');


const router = express.Router();


router.post('/dmark/save',(req,res)=>{ 
    let newDmark = new Dmarks(req.body); 
    newDmark .save((err) =>{    
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


router.get('/dmarks',(req,res) =>{ 
    Dmarks.find().exec((err,dmarks) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingDmarks:dmarks
        });
        });
    });


router.get('/dmark/:id',(req,res)=>{ 
        let DmarkID = req.params.id; 
        Dmarks.findById(DmarkID,(err,dmark)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
              dmark
            });
        });
    });

    
   
    router.put('/dmark/update/:id',(req,res)=>{ 
         Dmarks.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,dmark)=>{ 
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

    




   
    router.delete('/dmark/delete/:id', (req,res)=>{ 
        Dmarks.findByIdAndRemove(req.params.id).exec((err,deleteDmark)=>{ 
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deleteDmark

            });
        });
    });


module.exports = router; 
