const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  professional: {
    type: Schema.Types.ObjectId,
    ref: "professionals",
    required: true,
  },
  specialty: {
    type: Schema.Types.ObjectId,
    ref: "specialties",
    required: true,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "locations",
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
