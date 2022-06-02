const express = require('express');
const Emarks = require ('../models/Emark');

const router = express.Router();


router.post('/emark/save',(req,res)=>{ 
    let newEmark = new Emarks(req.body);  
    newEmark.save((err) =>{     
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



router.get('/emark',(req,res) =>{ 
    Emarks.find().exec((err,emarks) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingEmarks:emarks 
        });
        });
    });


    
    router.get('/emark/:id',(req,res)=>{ 
        let emarkID = req.params.id;
        Emarks.findById(emarkID,(err,emark)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
                emark
            });
        });
    });
    
    
   
    router.put('/emark/update/:id',(req,res)=>{ 
         Emarks.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,emark)=>{ 
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

    
    router.delete('/emark/delete/:id', (req,res)=>{ 
        Emarks.findByIdAndRemove(req.params.id).exec((err,deleteEmark)=>{ 
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deleteEmark

            });
        });
    });


module.exports = router; 
