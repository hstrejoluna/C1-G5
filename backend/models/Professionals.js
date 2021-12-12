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
  specialty: {
    type: mongoose.Schema.ObjectId, // ObjectId de la coleccion Specialties
    ref: "Specialties",
    required: "The Speciality is required",
  },
  location: {
    type: mongoose.Schema.ObjectId, // ObjectId de la coleccion Locations
    ref: "Locations",
  },
});

module.exports = mongoose.model("Professionals", professionalsSchema);
