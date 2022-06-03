const mongoose = require("mongoose");
const uploadDocSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  pdf : {
    type: String,
  },
  
    cloud_doc: {
    type: String,
  }
});

module.exports = mongoose.model("uploadDoc", uploadDocSchema);