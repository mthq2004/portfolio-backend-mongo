const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [String],
  description: String,
  technologies: [String],
  role: String,
  groupRole: String,
  lessons: [String],
});

module.exports = mongoose.model("Project", projectSchema);
