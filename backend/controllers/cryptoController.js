const Locations = require("../models/Locations");

exports.newLocation = async (req, res, next) => {
  const location = new Locations(req.body);
  try {
    await location.save();
    res.json({ message: "Location added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showLocations = async (req, res, next) => {
  try {
    const locations = await Locations.find({});
    res.json(locations);
  } catch (error) {
    console.log(error);
    next();
  }
};


exports.showLocation = async (req, res, next) => {
  const location = await Locations.findById(req.params.idLocation);

  if (!location) {
    res.json({ message: "Location doesn't exists" });
    next();
  }

  res.json(location);
  return;
};

exports.updateLocation = async (req, res, next) => {
  try {
    const location = await Locations.findOneAndUpdate(
      { _id: req.params.idLocation },
      req.body,
      {
        new: true,
      }
    );
    res.json(location);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteLocation = async (req, res, next) => {
  try {
    await Locations.findOneAndDelete({ _id: req.params.idLocation });
    res.json({ message: "Location has successfully deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};
