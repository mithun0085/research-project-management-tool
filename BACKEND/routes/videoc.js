const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const multer  = require('multer')
const uuid=require('uuid').v4;
const path = require('path');
const Videoc = require("../models/videoc");

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
    if (file.mimetype == "video/mp4") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only  .mp4 format allowed!'));
    }
},
storage:storage,
})
  

router.post("/", upload.array('uploaded_Image', 10), async (req, res) => {
  try {
 
    console.log(req.files.length)
     console.log("Files",fileInArray)
     
     let vid;
    
 
   for(let i=0;i<fileInArray.length;i++){
     let fileext = fileInArray[i][0].split('.')[1];
     console.log(path.resolve(__dirname, "../uploads"))
     if(fileext=="mp4")
     vid = await cloudinary.uploader.upload(`${path.resolve(__dirname, "../uploads")}/${fileInArray[i][0]}`,{ resource_type: "video" });
     
   }
 
    let videoc = new Videoc({
      name: req.body.name,
      video : vid.secure_url,
      cloudinary_id_vid: vid.public_id,
      
    });
    
    await videoc.save();
    res.json(videoc);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let videoc = await Videoc.find();
    res.json(videoc);
  } catch (err) {
    console.log(err);
  }
});


module.exports = router;

