const express = require('express');
const Topics = require('../models/topics');

const router = express.Router();


router.post('/topic/save',(req,res)=>{ 
    let newTopic = new Topics(req.body); 
    newTopic.save((err) =>{    
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



router.get('/topics',(req,res) =>{ 
    Topics.find().exec((err,topic) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingTopics:topic
        });
        });
    });


    router.get('/topic/:id',(req,res)=>{ 
        let GroupId = req.params.id; 
        Topics.findById(GroupId,(err,topic)=>{ 
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
    
    
   
    router.put('/topic/update/:id',(req,res)=>{ 
         Topics.findByIdAndUpdate( 
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
