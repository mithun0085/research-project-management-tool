const express = require('express');
const Topics2 = require('../models/topics2');

const router = express.Router();


router.post('/topic2/save',(req,res)=>{ 
    let newTopic2 = new Topics2(req.body); 
    newTopic2.save((err) =>{    
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



router.get('/topics2',(req,res) =>{ 
    Topics2.find().exec((err,topic2) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingTopics:topic2
        });
        });
    });


    router.get('/topic/:id',(req,res)=>{ 
        let GroupId = req.params.id; 
        Topics2.findById(GroupId,(err,topic)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
               topic
            });
        });
    });
    
    
   
    router.put('/topic2/update/:id',(req,res)=>{ 
         Topics2.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,topic)=>{ 
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

   

    /*
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
*/

module.exports = router; 
