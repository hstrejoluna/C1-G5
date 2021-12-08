const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialtiesSchema = new Schema({
  specialty: {
    type: String,
    trim: true,
  },
  departure: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Specialties", specialtiesSchema);
