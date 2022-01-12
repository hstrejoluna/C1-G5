const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");
const crypto = require("../controllers/crypto");

module.exports = function () {
  //////////////////////////////////
  // Operaciones para clientes
  //////////////////////////////////

  // Agrega nuevos clientes via POST
  router.post("/clients", clientController.newClient);

  // Obtiene todos los clientes
  router.get("/clients", clientController.showClients);

  // Muestra un cliente en especifico (ID)
  router.get("/clients/:idClient", clientController.showClient);

  // Actualiza Cliente
  router.put("/clients/:idClient", clientController.updateClient);

  // Elimina Cliente
  router.delete("/clients/:idClient", clientController.deleteClient);

  /////////////////////////////////
  // Operaciones para cryptos (Cryptos)
  /////////////////////////////////

  // Agrega nuevos cryptos via POST
  router.post("/cryptos", crypto.newCrypto);

  // Obtiene todos los cryptos
  router.get("/cryptos", crypto.showCryptos);

  // Muestra un crypto en especifico (ID)
  router.get("/cryptos/:idCrypto", crypto.showCrypto);

  // Actualiza crypto
  router.put("/cryptos/:idCrypto", crypto.updateCrypto);

  // Elimina crypto
  router.delete("/cryptos/:idCrypto", crypto.deleteCrypto);

  return router;
};
