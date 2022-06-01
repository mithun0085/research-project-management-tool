const express = require('express');
const TopicDocs = require('../models/TopicDocs');

const router = express.Router();


router.post('/topicdoc/save',(req,res)=>{ 
    let newTopicDoc = new TopicDocs(req.body); 
    newTopicDoc.save((err) =>{    
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



router.get('/topicdocs',(req,res) =>{ 
    TopicDocs.find().exec((err,topicdoc) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingTopicDocs:topicdoc
        });
        });
    });


    router.get('/topicdoc/:id',(req,res)=>{ 
        let GroupId = req.params.id; 
        TopicDocs.findById(GroupId,(err,topicdoc)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
               topicdoc
            });
        });
    });
    
    
   
    router.put('/topicdoc/update/:id',(req,res)=>{ 
         TopicDocs.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,topicdoc)=>{ 
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
