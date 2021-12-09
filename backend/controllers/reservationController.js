const Reservations = require("../models/Reservations");
const Clients = require("../models/Clients");
const Specialties = require("../models/Specialties");
const Professionals = require("../models/Professionals");
const Locations = require("../models/Locations");

exports.newReservation = async (req, res, next) => {
  const client = new Clients(req.body);
  const specialty = new Specialties(req.body);
  const professional = new Professionals(req.body);
  const location = new Locations(req.body);

  const reservation = new Reservations(req.body);

  try {
    await reservation.save();
    res.json({ message: "Reservation added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showReservations = async (req, res, next) => {
  try {
    const specialties = await Reservations.find({});
    res.json(specialties);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showReservation = async (req, res, next) => {
  const reservation = await Reservations.findById(req.params.idReservation);

  if (!reservation) {
    res.json({ message: "Reservation doesn't exists" });
    next();
  }

  res.json(reservation);
};

exports.updateReservation = async (req, res, next) => {
  try {
    const reservation = await Reservations.findOneAndUpdate(
      { _id: req.params.idReservation },
      req.body,
      {
        new: true,
      }
    );
    res.json(reservation);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteReservation = async (req, res, next) => {
  try {
    await Reservations.findOneAndDelete({ _id: req.params.idReservation });
    res.json({ message: "Reservation has successfully deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};
