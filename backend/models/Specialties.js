const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const specialtiesSchema = new Schema({
  specialty: {
    type: String,
    trim: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Professionals",
    required: true,
  },
});

module.exports = mongoose.model("Specialties", specialtiesSchema);
