const Clients = require("../models/Clients");

exports.newClient = async (req, res, next) => {
  const client = new Clients(req.body);

  try {
    await client.save();
    res.json({ message: "Client added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};
