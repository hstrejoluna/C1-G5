const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
  client: {
    name: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    birthday: {
      day: {
        type: Number,
      },
      month: {
        type: Number,
      },
      year: {
        type: Number,
      },
    },
    ssnorid: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
  },
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
