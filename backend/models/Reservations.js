const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
  professional: {
    type: Schema.Types.ObjectId,
    ref: "Professionals",
    required: true,
  },
  specialty: {
    type: Schema.Types.ObjectId,
    ref: "Specialties",
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Locations",
    required: true,
  },
  reservation: {
    day: {
      type: Number,
    },
    month: {
      type: Number,
    },
    year: {
      type: Number,
    },
    time: {
      hour: {
        type: Number,
      },
      minute: {
        type: Number,
      },
    },
  },
});

module.exports = mongoose.model("Reservations", ReservationsSchema);
