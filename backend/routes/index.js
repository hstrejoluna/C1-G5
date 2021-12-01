const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");
const specialtyController = require("../controllers/specialtyController");

module.exports = function () {
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

  //////////////////////////////////
  // Operaciones para especialidades
  //////////////////////////////////

  // Agrega nuevas especialidades via POST
  router.post("/specialties", specialtyController.newSpecialty);

  // Obtiene todas las especialidades
  router.get("/specialties", specialtyController.showSpecialties);

  // Muestra una especialidad en especifico (ID)
  router.get("/specialties/:idSpecialty", specialtyController.showSpecialty);

  // Actualiza especialidad
  router.put("/specialties/:idSpecialty", specialtyController.updateSpecialty);

  // Elimina especialidad
  router.delete(
    "/specialties/:idSpecialty",
    specialtyController.deleteSpecialty
  );

  return router;
};
