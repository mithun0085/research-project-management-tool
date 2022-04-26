const express = require('express');
const Staffs = require('../models/Staff');

const router = express.Router();


//save 
router.post('/staffs/save',(req,res)=>{ 
    let newStaff = new Staffs(req.body); 
    newStaff.save((err) =>{     
         if(err){ //err 
              return res.status(400).json({ //json err
                  error:err //function error send
              });
         }
         return res.status(200).json({ 
             success:"details saved successfully"  
         });
    });



});

//get details

router.get('/staffs',(req,res) =>{ 
    Staffs.find().exec((err,staffs) =>{ 
        if(err){ //err
            return res.status(400).json({
                error:err //print error

            });
        }
        return res.status(200).json({
            success:true, //succees 
            existingStaffs:staffs 
        });
        });
    });
    
    //get a specifc
    router.get('/staffs/:id',(req,res)=>{ 
        let staffID = req.params.id; 
        Staffs.findById(staffID,(err,staff)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
                staff
            });
        });
    });

    //update 
    router.put('/staffs/update/:id',(req,res)=>{ 
        Staffs.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,staffSchema)=>{ //callback function
                 if(err){  //err 
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

    //delete 
    router.delete('/staffs/delete/:id', (req,res)=>{ 
        Staffs.findByIdAndRemove(req.params.id).exec((err,deleteStaff)=>{ 
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deleteStaff

            });
        });
    });


module.exports = router; //export 