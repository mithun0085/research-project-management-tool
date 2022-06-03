const express = require('express');
const Requests = require('../models/Requests');


const router = express.Router();


//save 
router.post('/requests/save',(req,res)=>{ 
    let newRequest = new Requests(req.body)
   
    newRequest.save((err) =>{   
          
         if(err){ //err 
              return res.status(400).json({ //json err
                  error:err //function error send
              });
         }
         return res.status(200).json({ 
             success:"Requested supervisor successfully"  
         });
    });



});

//get details

router.route("/requests").get((req,res)=>{

    Requests.find().then((request)=>{
         res.json(request)
    }).catch((err)=>{
         console.log(err)
    })
})

 //delete 
 router.delete('/requests/delete/:id', (req,res)=>{ 
    Requests.findByIdAndRemove(req.params.id).exec((err,deleteGroup)=>{ 
        if(err) return res.status(400).json({
            message:"Delete  Unsuccessful",err

        });
        return res.json({
            message:"Deleting group is Successfull",deleteGroup

        });
    });
});
    
  

    //get one
   
router.get("/requestget/:id",(req,res) =>{
    let postId = req.params.id;

    Requests.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});
module.exports = router;  