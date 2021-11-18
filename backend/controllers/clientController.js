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

exports.showClients = async (req, res, next) => {
  try {
    const clients = await Clients.find({});
    res.json(clients);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showClient = async (req, res, next) => {
  const client = await Clients.findById(req.params.idClient);

  if (!client) {
    res.json({ message: "Client doesn't exists" });
    next();
  }

  res.json(client);
};
