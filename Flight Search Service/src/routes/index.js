const express = require("express");
const router = express.Router();
const airplaneRoutes = require("./airplane.route");
const airportRoutes = require("./airport.route");
const cityRoutes = require("./city.route");
const flightRoutes = require("./flight.route");

router.use("/airplanes", airplaneRoutes);
router.use("/airports", airportRoutes);
router.use("/cities", cityRoutes);
router.use("/flights", flightRoutes);

module.exports = router;