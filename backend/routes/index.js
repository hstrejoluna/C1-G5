const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");
const specialtyController = require("../controllers/specialtyController");
const professionalController = require("../controllers/professionalController");
const locationController = require("../controllers/locationController");
const reservationController = require("../controllers/reservationController");

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

  //////////////////////////////////
  // Operaciones para especialidades
  //////////////////////////////////

  // Agrega nuevas especialidades via POST
  router.post("/specialties", specialtyController.newSpecialty);

  // Obtiene todas las especialidades
  router.get("/specialties", specialtyController.showSpecialties);

  // Obtiene especialidad por Ubicacion (ID)
  router.get(
    "/specialties/:location",
    specialtyController.showSpecialtiesByLocation
  );

  // Muestra una especialidad en especifico (ID)
  router.get("/specialties/:idSpecialty", specialtyController.showSpecialty);

  // Actualiza especialidad
  router.put("/specialties/:idSpecialty", specialtyController.updateSpecialty);

  // Elimina especialidad
  router.delete(
    "/specialties/:idSpecialty",
    specialtyController.deleteSpecialty
  );

  /////////////////////////////////
  // Operaciones para profesionales
  /////////////////////////////////

  // Agrega nuevos profesionales via POST
  router.post("/professionals", professionalController.newProfessional);

  // Obtiene todos los profesionales
  router.get("/professionals", professionalController.showProfessionals);

  // Muestra un profesional en especifico (ID)
  router.get(
    "/professionals/:idProfessional",
    professionalController.showProfessional
  );

  // Obtiene a los profesionales que tienen tal Especialidad (ID)
  router.get(
    "/professionals/:specialty",
    professionalController.showProfessionalsBySpecialty
  );

  // Obtiene a los profesionales usando Especialidad y Ubicacion (ID)
  router.get(
    "/professionals/:location/:specialty",
    professionalController.showProfessionalsByLocationAndSpecialty
  );

  // Actualiza profesional
  router.put(
    "/professionals/:idProfessional",
    professionalController.updateProfessional
  );

  // Elimina profesional
  router.delete(
    "/professionals/:idProfessional",
    professionalController.deleteProfessional
  );

  /////////////////////////////////
  // Operaciones para ubicaciones (Locations)
  /////////////////////////////////

  // Agrega nuevos profesionales via POST
  router.post("/locations", locationController.newLocation);

  // Obtiene todos los profesionales
  router.get("/locations", locationController.showLocations);

  // Muestra un profesional en especifico (ID)
  router.get("/locations/:idLocation", locationController.showLocation);

  // Actualiza profesional
  router.put("/locations/:idLocation", locationController.updateLocation);

  // Elimina profesional
  router.delete("/locations/:idLocation", locationController.deleteLocation);

  /////////////////////////////////
  // Operaciones para reservaciones
  /////////////////////////////////

  // Agrega una nueva reservacion via POST
  router.post(
    "/reservations",
    clientController.newClient,
    reservationController.newReservation
  );

  // Obtiene todas las reservaciones
  router.get("/reservations", reservationController.showReservations);

  // Muestra una reservacion en especifico (ID)
  router.get(
    "/reservations/:idReservation",
    reservationController.showReservation
  );

  // Actualiza reservacion
  router.put(
    "/reservations/:idReservation",
    reservationController.updateReservation
  );

  return router;
};
