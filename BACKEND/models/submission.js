const mongoose = require("mongoose");
const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  pdf : {
    type: String,
  },
  
cloudinary_id_pdf: {
    type: String,
  }
});

module.exports = mongoose.model("Submission", submissionSchema);
