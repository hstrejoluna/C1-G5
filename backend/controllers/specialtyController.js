const Specialties = require("../models/Specialties");

exports.newSpecialty = async (req, res, next) => {
  const specialty = new Specialties(req.body);
  try {
    await specialty.save();
    res.json({ message: "Specialty added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showSpecialties = async (req, res, next) => {
  try {
    const Specialties = await Specialties.find({});
    res.json(Specialties);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showSpecialty = async (req, res, next) => {
  const specialty = await Specialties.findById(req.params.idSpecialty);

  if (!specialty) {
    res.json({ message: "Specialty doesn't exists" });
    next();
  }

  res.json(specialty);
};

exports.updateSpecialty = async (req, res, next) => {
  try {
    const specialty = await Specialties.findOneAndUpdate(
      { _id: req.params.idSpecialty },
      req.body,
      {
        new: true,
      }
    );
    res.json(specialty);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteSpecialty = async (req, res, next) => {
  try {
    await Specialties.findOneAndDelete({ _id: req.params.idSpecialty });
    res.json({ message: "Specialty has successfully deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};
