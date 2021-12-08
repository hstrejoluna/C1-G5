const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Locations", LocationsSchema);
