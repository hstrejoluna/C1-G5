const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");

module.exports = function () {
  // Agrega nuevos clientes via POST
  router.post("/clients", clientController.newClient);

  router.get("/clients", clientController.showClients);

  router.get("/clients/:idClient", clientController.showClient);

  return router;
};
