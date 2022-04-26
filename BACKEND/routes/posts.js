const express = require('express');//
const Posts = require('../models/posts');//
const Emps = require('../models/emps');
const emps = require('../models/emps');

const router = express.Router();//

//save post
router.post('/post/save',(req,res)=>{//

    let newPost = new Posts(req.body);//

    newPost.save((err)=>{//
        if(err){//
            return res.status(400).json({//
                error:err//
            });//
        }//
        return res.status(200).json({//
            success:"Posts saved successfully"//
        });//
    });//
});//

//get post
router.get('/posts',(req,res)=>{//
    Posts.find().exec((err,posts)=>{//
        if (err){//
            return res.status(400).json({//
                error:err//
            });//
        }//
        return res.status(200).json({//
            success:true,//
            existingPosts:posts//
        });//
    });//
});//


//get a specific post
router.get("/post/:id",(req,res)=>{//

    let postId = req.params.id;//

    Posts.findById(postId,(err,post)=>{//
        if(err){//
            return res.status(400).json({success:false, err});//
        }//
        return res.status(200).json({//
            success:true,//
            post//
        });//
    });//
});//

//update post
router.put('/post/update/:id',(req,res)=>{//
    Posts.findByIdAndUpdate(//
        req.params.id,//
        {//
            $set:req.body//
        },//
        (err,Post)=>{//
            if(err){//
                return res.status(400).json({error:err});//
            }//

            return res.status(200).json({//
                success:"Update Successfully"//
            });//
        }//
   );//
});//

//delete post
router.delete('/post/delete/:id',(req,res)=>{//
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{//
        if(err) return res.status(400).json({//
            message:"Delete Unsuccessful",err//
        });//

        return res.json({//
            message:"Delete Successful",deletedPost//
        });//
    });//
});//



//save employee
router.post('/emp/save',(req,res)=>{//

    let newEmp = new Emps(req.body);//

    newEmp.save((err)=>{//
        if(err){//
            return res.status(400).json({//
                error:err//
            });//
        }//
        return res.status(200).json({//
            success:"Employees saved successfully"//
        });//
    });//
});//

//get a specific employee
router.get("/emp/:id",(req,res)=>{//

    let empId = req.params.id;//

    Emps.findById(empId,(err,post)=>{//
        if(err){//
            return res.status(400).json({success:false, err});//
        }//
        return res.status(200).json({//
            success:true,//
            post//
        });//
    });//
});//

//get employee
router.get('/emps',(req,res)=>{//
    Emps.find().exec((err,emps)=>{//
        if (err){//
            return res.status(400).json({//
                error:err//
            });//
        }//
        return res.status(200).json({//
            success:true,//
            existingEmps:emps//
        });//
    });//
});//

//update employee
router.put('/emp/update/:id',(req,res)=>{//
    Emps.findByIdAndUpdate(//
        req.params.id,//
        {//
            $set:req.body//
        },//
        (err,_Post)=>{//
            if(err){//
                return res.status(400).json({error:err});//
            }//
            return res.status(200).json({//
                success:"Update Successfully"//
            });//
        }//
   );//
});//

//delete employee
router.delete('/emps/remove/:id',(req,res)=>{//
    Emps.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{//
        if(err) return res.status(400).json({//
            message:"Delete Unsuccessful",err//
        });//
        return res.json({//
            message:"Delete Successful",deletedEmp//
        });//
    });//
});//


module.exports = router;//


//all ok