const express = require('express');
const Posts = require('../models/postsSer');//import created user model

const router = express.Router();

//save delivery

router.post('/postsSer/save',(req,res)=>{

    let newPost = new Posts(req.body);//constant eka haraha uda gatta Posts instanciate krnna ona

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Deliveries saved successfully"
        });    
    });

});

//get deliveries
router.get('/postsSer',(req,res) =>{
    Posts.find().exec((err,posts) =>{//find is a mongoose function
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific delivery
router.get("/postsSer/:id",(req,res) =>{

     let postId = req.params.id;

     Posts.findById(postId,(err,post) =>{
         if(err){
             return res.status(400).json({success:false,err});
         }
         return res.status(200).json({
             success:true,
             post
         });
     })
    
})

//update deliveries
router.put('/postsSer/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body//eligible to update what is needed to update without restricting
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete delivery

router.delete('/postsSer/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{

        if(err) return res.status(400).json({
            message: "Delete unsuccessful",err
        });
        return res.json({
            message: "Delete successful",deletedPost
        });
    });
});

module.exports = router;
