const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
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
