const express = require('express');
const Students = require('../models/Students');

const router = express.Router();


//save 
router.post('/students/save',(req,res)=>{ 
    let newStudent = new Students(req.body); 
   
    newStudent.save((err) =>{     
         if(err){ //err 
              return res.status(400).json({ //json err
                  error:err //function error send
              });
         }
         return res.status(200).json({ 
             success:"Student group created successfully"  
         });
    });



});

//get details

router.route("/students").get((req,res)=>{

    Students.find().then((student)=>{
         res.json(student)
    }).catch((err)=>{
         console.log(err)
    })
})
    
  

    //update 
   
router.get("/studentget/:id",(req,res) =>{
    let postId = req.params.id;

    Students.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

router.put('/stupdate/:id',(req,res)=>{
    Students.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfully"
            });
        }
    );
});

    //delete 
    router.delete('/students/delete/:id', (req,res)=>{ 
        Students.findByIdAndRemove(req.params.id).exec((err,deleteGroup)=>{ 
            if(err) return res.status(400).json({
                message:"Delete group Unsuccessful",err

            });
            return res.json({
                message:"Deleting group is Successfull",deleteGroup

            });
        });
    });


module.exports = router;  