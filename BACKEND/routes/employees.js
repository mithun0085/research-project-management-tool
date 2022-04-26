const express = require('express');
const Employees = require('../models/employees');

const router = express.Router();


router.post('/salary/save',(req,res)=>{ 
    let newEmployee = new Employees(req.body);  
    newEmployee.save((err) =>{     
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



router.get('/salaries',(req,res) =>{ 
    Employees.find().exec((err,employees) =>{ 
        if(err){ 
            return res.status(400).json({
                error:err 

            });
        }
        return res.status(200).json({
            success:true, 
            existingSalaries:employees 
        });
        });
    });


    
    router.get('/salary/:id',(req,res)=>{ 
        let salaryID = req.params.id;
        Employees.findById(salaryID,(err,employee)=>{ 
            if(err){
                return res.status(400).json({
                    success:false,err});
            }
            return res.status(200).json({
                success:true,
                employee
            });
        });
    });
    
    
   
    router.put('/salary/update/:id',(req,res)=>{ 
         Employees.findByIdAndUpdate( 
             req.params.id, 
             {
                 $set:req.body 

             },
             (err,employee)=>{ 
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

    
    router.delete('/salary/delete/:id', (req,res)=>{ 
        Employees.findByIdAndRemove(req.params.id).exec((err,deleteSalary)=>{ 
            if(err) return res.status(400).json({
                message:"Delete Unsuccessful",err

            });
            return res.json({
                message:"Delete Successfull",deleteSalary

            });
        });
    });


module.exports = router; 
