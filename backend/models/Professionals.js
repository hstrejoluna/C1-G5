const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const professionalsSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  Speciality:{
    type: mongoose.Schema.ObjectId, // ObjectId de la coleccion Specialties
    ref: "Specialties",
    required: "The Speciality is required",
  }
});

module.exports = mongoose.model("Professionals", professionalsSchema);
