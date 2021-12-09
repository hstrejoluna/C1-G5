const Professionals = require("../models/Professionals");

exports.newProfessional = async (req, res, next) => {
  const professional = new Professionals(req.body);
  try {
    await professional.save();
    res.json({ message: "Professional added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showProfessionals = async (req, res, next) => {
  try {
    const professionals = await Professionals.find({});
    res.json(professionals);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showProfessional = async (req, res, next) => {
  const professional = await Professionals.findById(req.params.idProfessional);

  if (!professional) {
    res.json({ message: "Professional doesn't exists" });
    next();
  }

  res.json(professional);
  return;
};

exports.updateProfessional = async (req, res, next) => {
  try {
    const professional = await Professionals.findOneAndUpdate(
      { _id: req.params.idProfessional },
      req.body,
      {
        new: true,
      }
    );
    res.json(professional);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteProfessional = async (req, res, next) => {
  try {
    await Professionals.findOneAndDelete({ _id: req.params.idProfessional });
    res.json({ message: "Professional has successfully deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};
