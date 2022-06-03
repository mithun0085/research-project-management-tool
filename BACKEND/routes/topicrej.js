const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const multer  = require('multer')
const uuid=require('uuid').v4;
const path = require('path');
const Topicrej = require("../models/topicrej");

const files=[];
const fileInArray=[]

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"uploads")
},
  filename:(req,file,cb)=>{
      let filePath=[];
      console.log("MULTER ENTRY ",file.originalname)
      console.log("files",req.files)
      
      const ext = path.extname(file.originalname);
      const id = uuid();
      filePath = `${id}${ext}`;
      fileInArray.push([(filePath)])  
      console.log("IN ARRAY ",filePath)        
      files.push(fileInArray)
      console.log("PUSHED MAIN ARRAY", fileInArray)    
      cb(null,filePath)       
      console.log("current length",files.length)
  }
})


const upload=multer({
    
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "video/mp4" || file.mimetype == "application/pdf") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg, .jpeg .mp4 and .pdf format allowed!'));
    }
},
storage:storage,
})
  

router.post("/", upload.array('uploaded_Image', 10), async (req, res) => {
  try {
 
    console.log(req.files.length)
     console.log("Files",fileInArray)
    
     let pdff;
 
   for(let i=0;i<fileInArray.length;i++){
     let fileext = fileInArray[i][0].split('.')[1];
     console.log(path.resolve(__dirname, "../uploads"))
     
     if(fileext=="pdf")
     pdff = await cloudinary.uploader.upload(`${path.resolve(__dirname, "../uploads")}/${fileInArray[i][0]}`,{ pages: true });
   }
 
    let topicrej = new Topicrej({
      name: req.body.name,
    
      pdf : pdff.secure_url,
  
      cloudinary_id_pdf: pdff.public_id,
    });
    
    await topicrej.save();
    res.json(topicrej);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let topicrej = await Topicrej.find();
    res.json(topicrej);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id',async (req, res) =>{ 
  let name = req.params.id; 
  Topicrej.findById(name,(err,topicrej)=>{ 
      if(err){
          return res.status(400).json({
              success:false,err});
      }
      return res.status(200).json({
          success:true,
         topicrej
      });
  });
});


router.put('/update/:id',(req,res)=>{ 
  Topicrej.findByIdAndUpdate( 
      req.params.id, 
      {
          $set:req.body 

      },
      (err,topicrej)=>{ 
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





module.exports = router;
