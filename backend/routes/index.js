const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");

module.exports = function () {
  // Agrega nuevos clientes via POST
  router.post("/clients", clientController.newClient);

  return router;
};
